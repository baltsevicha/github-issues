import { takeLatest, put, call } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import api from 'src/packages/api';

import { submitForm, toggleLoading } from '../actions';

function* handleSubmit(action) {
  yield put(toggleLoading());

  const { organization, repository } = action.payload;

  try {
    const { issues, issuesCount } = yield call(api.issues.fetchIssues, {
      organization,
      repository,
    });

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
