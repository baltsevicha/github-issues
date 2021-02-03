import { select, call, put } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import api from 'src/packages/api';
import authSelectors from 'src/selectors/auth';

import {
  updateIssues,
  updateCurrentPage,
  updateNextPage,
  updateIssuesCount,
  updatePageInfo,
} from '../actions';
import selectors from '../selectors';
import preparePaginationParams from './preparePaginationParams';

export default function* () {
  const componentId = yield select(selectors.getComponentId);
  const organization = yield select(selectors.getOrganization);
  const repository = yield select(selectors.getRepository);
  const nextPage = yield select(selectors.getNextPage);
  const currentPage = yield select(selectors.getCurrentPage);
  const selectedState = yield select(selectors.getSelectedState);
  const selectedSort = yield select(selectors.getSelectedSort);
  const token = yield select(authSelectors.getToken);

  const paginationParams = yield call(preparePaginationParams);

  try {
    const { issues, issuesCount, pageInfo } = yield call(
      api.issues.fetchIssues,
      {
        token,
        organization,
        repository,
        state: selectedState,
        sort: selectedSort,
        ...paginationParams,
      }
    );

    yield put(updateIssuesCount(issuesCount));
    yield put(updateIssues(issues));
    yield put(updateCurrentPage(nextPage));
    yield put(updatePageInfo(pageInfo));
  } catch (error) {
    Navigation.push(componentId, {
      component: {
        name: SCREENS.ERROR,
        passProps: {
          errorMessage: error.message,
        },
      },
    });

    yield put(updateNextPage(currentPage));
  }
}
