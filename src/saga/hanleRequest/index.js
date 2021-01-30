import { takeLatest, put, call } from 'redux-saga/effects';

import api from 'src/packages/api';

import getApiMethodNameByActionType from './getApiMethodNameByActionType';

function* handleRequest(action) {
  const apiMethodName = getApiMethodNameByActionType(action.type);

  const apiMethod = api[apiMethodName];

  if (!apiMethod) {
    return;
  }

  try {
    const data = yield call(apiMethod, action.payload);

    yield put({
      type: action.type.replace('_REQUEST', '_SUCCESS'),
      payload: action.payload,
      response: data,
    });
  } catch (error) {
    yield put({
      type: action.type.replace('_REQUEST', '_FAILURE'),
      payload: action.payload,
    });
  }
}

export default function* () {
  yield takeLatest((action) => action.type.endsWith('_REQUEST'), handleRequest);
}
