import { createReducer } from '@reduxjs/toolkit';

import { initIssues, resetIssues } from '../actions';

const defaultValue = [];

export default createReducer(defaultValue, {
  [initIssues.type]: (state, action) => action.payload.issues,
  [resetIssues.type]: () => defaultValue,
});
