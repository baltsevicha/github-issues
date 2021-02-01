import { combineReducers } from 'redux';

import isLoading from './isLoading';
import componentId from './componentId';

export default combineReducers({
  isLoading,
  componentId,
});
