import { takeLatest, put, call } from 'redux-saga/effects';

import api, { SERVER_ERRORS } from 'src/packages/api';
import { submitForm, toggleLoading } from '../actions';

function* handleSubmit(action) {
  yield put(toggleLoading());

  try {
    const data = yield call(api.issues.fetchIssues, action.payload);
    console.log('aaa data = ', Object.keys(data));
  } catch (error) {
    if (error.message === SERVER_ERRORS.NOT_FOUND) {
      console.log('REDIRECT TO NOT FOUND');
    }
  } finally {
    yield put(toggleLoading());
  }
}

export default function* () {
  yield takeLatest(submitForm.type, handleSubmit);
}
