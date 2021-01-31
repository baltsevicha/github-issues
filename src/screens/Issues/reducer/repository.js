import { createReducer } from '@reduxjs/toolkit';

import { initIssues, resetIssues } from '../actions';

const defaultValue = null;

export default createReducer(defaultValue, {
  [initIssues.type]: (state, action) => action.payload.repository,
  [resetIssues.type]: () => defaultValue,
});
