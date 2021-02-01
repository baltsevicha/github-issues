import { createAction } from '@reduxjs/toolkit';

const NAMESPACE = 'FAVORITE::';

export const toggleIssueFavorite = createAction(
  NAMESPACE + 'TOGGLE_ISSUE_FAVORITE'
);
