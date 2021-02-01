import { createReducer } from '@reduxjs/toolkit';

import { initIssues, resetIssues, updateIssuesCount } from '../actions';

const defaultValue = 0;

export default createReducer(defaultValue, {
  [initIssues.type]: (state, action) => action.payload.issuesCount,
  [resetIssues.type]: () => defaultValue,
  [updateIssuesCount.type]: (state, action) => action.payload,
});
