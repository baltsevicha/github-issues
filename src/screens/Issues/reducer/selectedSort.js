import { createReducer } from '@reduxjs/toolkit';

import { ISSUES_SORT_FIELDS } from 'src/constants/issues';

import { resetIssues, loadOtherSort } from '../actions';

const defaultValue = ISSUES_SORT_FIELDS.UPDATED;

export default createReducer(defaultValue, {
  [resetIssues.type]: () => defaultValue,
  [loadOtherSort.type]: (state, action) => action.payload,
});
