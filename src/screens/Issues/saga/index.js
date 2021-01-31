import { takeLatest } from 'redux-saga/effects';

import { loadNextPage } from '../actions';

function* updateIssues() {}

export default function* () {
  yield takeLatest(loadNextPage.type, updateIssues);
}
