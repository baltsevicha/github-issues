import { createAction } from '@reduxjs/toolkit';

const NAMESPACE = 'ISSUES_SCREEN::';

export const initIssues = createAction(NAMESPACE + 'INIT_ISSUES');
export const resetIssues = createAction(NAMESPACE + 'RESET_ISSUES');

export const changeCurrentPage = createAction(
  NAMESPACE + 'CHANGE_CURRENT_PAGE'
);
