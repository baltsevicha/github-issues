import { createReducer } from '@reduxjs/toolkit';

import {
  fetchIssuesRequest,
  fetchIssuesSuccess,
  fetchIssuesFailure,
} from 'src/actions/issues';

export default createReducer(false, {
  [fetchIssuesRequest.type]: () => true,
  [fetchIssuesSuccess.type]: () => false,
  [fetchIssuesFailure.type]: () => false,
});
