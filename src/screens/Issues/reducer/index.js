import { combineReducers } from 'redux';

import issues from './issues';
import currentPage from './currentPage';
import issuesCount from './issuesCount';
import nextPage from './nextPage';

export default combineReducers({
  issues,
  currentPage,
  issuesCount,
  nextPage,
});
