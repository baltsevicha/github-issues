import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import { ISSUES_PER_PAGE } from 'src/constants/issues';
import api from 'src/packages/api';

import {
  loadNextPage,
  updateIssues,
  updateCurrentPage,
  updateNextPage,
  updateIssuesCount,
  loadOtherState,
  loadOtherSort,
  updatePageInfo,
} from '../actions';
import selectors from '../selectors';

function* preparePaginationParams() {
  const nextPage = yield select(selectors.getNextPage);
  const pagesCount = yield select(selectors.getPagesCount);
  const issuesCount = yield select(selectors.getIssuesCount);

  if (nextPage === 0) {
    return {
      first: ISSUES_PER_PAGE,
    };
  }

  if (nextPage === pagesCount - 1) {
    return {
      last: issuesCount % ISSUES_PER_PAGE,
    };
  }

  const currentPage = yield select(selectors.getCurrentPage);
  const pageInfo = yield select(selectors.getPageInfo);

  if (nextPage > currentPage) {
    return {
      first: ISSUES_PER_PAGE,
      after: pageInfo.endCursor,
    };
  }

  return {
    last: ISSUES_PER_PAGE,
    before: pageInfo.startCursor,
  };
}

function* updateScreen() {
  const componentId = yield select(selectors.getComponentId);
  const organization = yield select(selectors.getOrganization);
  const repository = yield select(selectors.getRepository);
  const nextPage = yield select(selectors.getNextPage);
  const currentPage = yield select(selectors.getCurrentPage);
  const selectedState = yield select(selectors.getSelectedState);
  const selectedSort = yield select(selectors.getSelectedSort);

  const paginationParams = yield call(preparePaginationParams);

  try {
    const { issues, issuesCount, pageInfo } = yield call(
      api.issues.fetchIssues,
      {
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

export default function* () {
  yield all([
    takeLatest(loadNextPage.type, updateScreen),
    takeLatest(loadOtherState.type, updateScreen),
    takeLatest(loadOtherSort.type, updateScreen),
  ]);
}
