import { createReducer } from '@reduxjs/toolkit';

import { initIssues, resetIssues, updateCurrentPage } from '../actions';

const defaultValue = 0;

export default createReducer(defaultValue, {
  [initIssues.type]: () => defaultValue,
  [resetIssues.type]: () => defaultValue,
  [updateCurrentPage.type]: (state, action) => action.payload,
});
