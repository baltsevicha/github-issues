import { createReducer } from '@reduxjs/toolkit';

import { ISSUES_STATE } from 'src/constants/issues';

import { resetIssues, loadOtherState } from '../actions';

const defaultValue = ISSUES_STATE.ALL;

export default createReducer(defaultValue, {
  [resetIssues.type]: () => defaultValue,
  [loadOtherState.type]: (state, action) => action.payload,
});
