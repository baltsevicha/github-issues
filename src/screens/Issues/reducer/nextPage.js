import { createReducer } from '@reduxjs/toolkit';

import {
  initIssues,
  resetIssues,
  updateNextPage,
  loadNextPage,
} from '../actions';

const defaultValue = 0;

export default createReducer(defaultValue, {
  [initIssues.type]: () => defaultValue,
  [resetIssues.type]: () => defaultValue,
  [loadNextPage.type]: (state, action) => action.payload,
  [updateNextPage.type]: (state, action) => action.payload,
});
