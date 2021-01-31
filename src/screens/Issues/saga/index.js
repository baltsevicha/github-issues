import { takeLatest, select, call, put } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import { ISSUES_PER_PAGE } from 'src/constants/issues';
import api from 'src/packages/api';

import {
  loadNextPage,
  updateIssues,
  updateCurrentPage,
  updateNextPage,
} from '../actions';
import selectors from '../selectors';

function* updateScreen() {
  const componentId = yield select(selectors.getComponentId);
  const organization = yield select(selectors.getOrganization);
  const repository = yield select(selectors.getRepository);
  const nextPage = yield select(selectors.getNextPage);
  const currentPage = yield select(selectors.getCurrentPage);

  try {
    const { issues } = yield call(api.issues.fetchIssuesWithPagination, {
      organization,
      repository,
      perPage: ISSUES_PER_PAGE,
      page: nextPage + 1,
    });

    yield put(updateIssues(issues));
    yield put(updateCurrentPage(nextPage));
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

export default function* () {
  yield takeLatest(loadNextPage.type, updateScreen);
}
