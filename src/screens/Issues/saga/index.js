import { takeLatest } from 'redux-saga/effects';

import { changeCurrentPage } from '../actions';

function* handleChangeCurrentPage() {}

export default function* () {
  yield takeLatest(changeCurrentPage.type, handleChangeCurrentPage);
}
