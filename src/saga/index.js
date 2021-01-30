import { all } from 'redux-saga/effects';

import hanleRequest from './hanleRequest';

function* saga() {
  yield all([hanleRequest()]);
}

export default saga;
