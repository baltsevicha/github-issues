import { createReducer } from '@reduxjs/toolkit';

import { toggleLoading } from '../actions';

export default createReducer(false, {
  [toggleLoading.type]: (state) => !state,
});
