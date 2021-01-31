import { createReducer } from '@reduxjs/toolkit';

import { initIssues, resetIssues, loadNextPage } from '../actions';

const defaultValue = 0;

export default createReducer(defaultValue, {
  [initIssues.type]: () => defaultValue,
  [resetIssues.type]: () => defaultValue,
  [loadNextPage.type]: (state, action) => action.payload,
});
