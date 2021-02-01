import { combineReducers } from 'redux';

import componentId from './componentId';
import issues from './issues';
import currentPage from './currentPage';
import issuesCount from './issuesCount';
import nextPage from './nextPage';
import organization from './organization';
import repository from './repository';
import selectedState from './selectedState';
import selectedSort from './selectedSort';

export default combineReducers({
  componentId,
  issues,
  currentPage,
  issuesCount,
  nextPage,
  organization,
  repository,
  selectedState,
  selectedSort,
});
