import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import { ISSUES_PER_PAGE, ISSUES_STATE } from 'src/constants/issues';
import api from 'src/packages/api';

import {
  loadNextPage,
  updateIssues,
  updateCurrentPage,
  updateNextPage,
  updateIssuesCount,
  loadOtherState,
} from '../actions';
import selectors from '../selectors';

function* updateScreen() {
  const componentId = yield select(selectors.getComponentId);
  const organization = yield select(selectors.getOrganization);
  const repository = yield select(selectors.getRepository);
  const nextPage = yield select(selectors.getNextPage);
  const currentPage = yield select(selectors.getCurrentPage);
  const selectedState = yield select(selectors.getSelectedState);

  try {
    const { issues, issuesCount } = yield call(
      api.issues.fetchIssuesWithCount,
      {
        organization,
        repository,
        perPage: ISSUES_PER_PAGE,
        state: selectedState,
        page: nextPage + 1,
      }
    );

    yield put(updateIssuesCount(issuesCount));
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
  yield all([
    takeLatest(loadNextPage.type, updateScreen),
    takeLatest(loadOtherState.type, updateScreen),
  ]);
}
