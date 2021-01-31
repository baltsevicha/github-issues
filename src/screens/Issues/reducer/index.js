import { combineReducers } from 'redux';

import issues from './issues';
import currentPage from './currentPage';
import issuesCount from './issuesCount';

export default combineReducers({
  issues,
  currentPage,
  issuesCount,
});
