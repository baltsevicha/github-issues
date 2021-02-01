import { createReducer } from '@reduxjs/toolkit';

import { saveToken } from '../actions/auth';

export default createReducer(null, {
  [saveToken.type]: (state, action) => action.payload,
});
