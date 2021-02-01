import { takeLatest, put, call } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import {
  ISSUES_PER_PAGE,
  ISSUES_STATE,
  ISSUES_SORT_FIELDS,
} from 'src/constants/issues';
import api from 'src/packages/api';

import { submitForm, toggleLoading } from '../actions';

function* handleSubmit(action) {
  yield put(toggleLoading());

  const { organization, repository } = action.payload;

  try {
    const { issues, issuesCount } = yield call(
      api.issues.fetchIssuesWithCount,
      {
        organization,
        repository,
        perPage: ISSUES_PER_PAGE,
        state: ISSUES_STATE.ALL,
        sort: ISSUES_SORT_FIELDS.UPDATED,
        page: 1,
      }
    );

    Navigation.push(action.payload.componentId, {
      component: {
        name: SCREENS.ISSUES,
        passProps: {
          issues,
          issuesCount,
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
