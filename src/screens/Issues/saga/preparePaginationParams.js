import { select } from 'redux-saga/effects';

import { ISSUES_PER_PAGE } from 'src/constants/issues';

import selectors from '../selectors';

export default function* () {
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
