import { createReducer } from '@reduxjs/toolkit';

import {
  initIssues,
  resetIssues,
  updateCurrentPage,
  loadOtherState,
  loadOtherSort,
} from '../actions';

const defaultValue = 0;

export default createReducer(defaultValue, {
  [initIssues.type]: () => defaultValue,
  [resetIssues.type]: () => defaultValue,
  [loadOtherState.type]: () => defaultValue,
  [loadOtherSort.type]: () => defaultValue,
  [updateCurrentPage.type]: (state, action) => action.payload,
});
