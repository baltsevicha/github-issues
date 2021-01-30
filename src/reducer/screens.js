import { combineReducers } from 'redux';

import HomeScreenReducer from 'src/screens/Home/reducer';

export default combineReducers({
  home: HomeScreenReducer,
});
