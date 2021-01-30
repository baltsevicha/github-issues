import { createAction } from '@reduxjs/toolkit';

const NAMESPACE = 'ISSUES::';

export const fetchIssuesRequest = createAction(
  NAMESPACE + 'FETCH_ISSUES_REQUEST'
);
export const fetchIssuesSuccess = createAction(
  NAMESPACE + 'FETCH_ISSUES_SUCCESS'
);
export const fetchIssuesFailure = createAction(
  NAMESPACE + 'FETCH_ISSUES_FAILURE'
);
