import { all } from 'redux-saga/effects';

import handleScreens from './handleScreens';

export default function* () {
  yield all([handleScreens()]);
}
