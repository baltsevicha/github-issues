import { all } from 'redux-saga/effects';

import handleHomeScreen from 'src/screens/Home/saga';
import handleIssuesScreen from 'src/screens/Issues/saga';

export default function* () {
  yield all([handleHomeScreen(), handleIssuesScreen()]);
}
