import { createReducer } from '@reduxjs/toolkit';

import { initIssues, resetIssues, changeCurrentPage } from '../actions';

const defaultValue = 0;

export default createReducer(defaultValue, {
  [initIssues.type]: () => defaultValue,
  [resetIssues.type]: () => defaultValue,
  [changeCurrentPage.type]: (state, action) => action.payload,
});
