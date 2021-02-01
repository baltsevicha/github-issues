import { combineReducers } from 'redux';

import componentId from './componentId';
import issues from './issues';
import currentPage from './currentPage';
import pageInfo from './pageInfo';
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
  pageInfo,
  nextPage,
  organization,
  repository,
  selectedState,
  selectedSort,
});
