import { all } from 'redux-saga/effects';

import handleHomeScreen from 'src/screens/Home/saga';

export default function* () {
  yield all([handleHomeScreen()]);
}
