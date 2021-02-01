import { takeLatest, put, call } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import {
  ISSUES_PER_PAGE,
  ISSUES_STATE,
  ISSUES_SORT_FIELDS,
} from 'src/constants/issues';
import { saveToken } from 'src/actions/auth';
import api from 'src/packages/api';

import { submitForm, toggleLoading } from '../actions';

function* handleSubmit(action) {
  yield put(toggleLoading());

  const { organization, repository, token } = action.payload;

  try {
    const { issues, issuesCount, pageInfo } = yield call(
      api.issues.fetchIssues,
      {
        token,
        organization,
        repository,
        first: ISSUES_PER_PAGE,
        state: ISSUES_STATE.ALL,
        sort: ISSUES_SORT_FIELDS.CREATED,
      }
    );

    yield put(saveToken(token));

    Navigation.push(action.payload.componentId, {
      component: {
        name: SCREENS.ISSUES,
        passProps: {
          issues,
          issuesCount,
          pageInfo,
          organization,
          repository,
        },
      },
    });
  } catch (error) {
    Navigation.push(action.payload.componentId, {
      component: {
        name: SCREENS.ERROR,
        passProps: {
          errorMessage: error.message,
        },
      },
    });
  } finally {
    yield put(toggleLoading());
  }
}

export default function* () {
  yield takeLatest(submitForm.type, handleSubmit);
}
