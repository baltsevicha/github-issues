import { createReducer } from '@reduxjs/toolkit';

import { resetIssues, initIssues, updatePageInfo } from '../actions';

const defaultValue = null;

export default createReducer(defaultValue, {
  [initIssues.type]: (state, action) => action.payload.pageInfo,
  [resetIssues.type]: () => defaultValue,
  [updatePageInfo.type]: (state, action) => action.payload,
});
