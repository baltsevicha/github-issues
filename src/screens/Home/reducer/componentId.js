import { createReducer } from '@reduxjs/toolkit';

import { saveComponentId } from '../actions';

export default createReducer(null, {
  [saveComponentId.type]: (state, action) => action.payload,
});
