import { combineReducers } from 'redux';

import favoriteIssues from './favoriteIssues';
import screens from './screens';
import token from './token';

export default combineReducers({
  favoriteIssues,
  screens,
  token,
});
