import { takeLatest } from 'redux-saga/effects';

import handleSubmit from './handleSubmit';
import { submitForm } from '../actions';

export default function* () {
  yield takeLatest(submitForm.type, handleSubmit);
}
