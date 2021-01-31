import { createReducer } from '@reduxjs/toolkit';

import { initIssues } from '../actions';

export default createReducer([], {
  [initIssues.type]: (state, action) => action.payload,
});
