import { createAction } from '@reduxjs/toolkit';

const NAMESPACE = 'ISSUES_SCREEN::';

export const initIssues = createAction(NAMESPACE + 'INIT_ISSUES');
export const resetIssues = createAction(NAMESPACE + 'RESET_ISSUES');

export const loadNextPage = createAction(NAMESPACE + 'LOAD_NEXT_PAGE');
export const loadOtherState = createAction(NAMESPACE + 'LOAD_OTHER_STATE');
export const loadOtherSort = createAction(NAMESPACE + 'LOAD_OTHER_SORT');

export const updateIssues = createAction(NAMESPACE + 'UPDATE_ISSUES');
export const updateCurrentPage = createAction(
  NAMESPACE + 'UPDATE_CURRENT_PAGE'
);
export const updateNextPage = createAction(NAMESPACE + 'UPDATE_NEXT_PAGE');
export const updateIssuesCount = createAction(
  NAMESPACE + 'UPDATE_ISSUES_COUNT'
);
