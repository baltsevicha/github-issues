import { combineReducers } from 'redux';

import HomeScreenReducer from 'src/screens/Home/reducer';
import IssuesScreenReducer from 'src/screens/Issues/reducer';

export default combineReducers({
  home: HomeScreenReducer,
  issues: IssuesScreenReducer,
});
