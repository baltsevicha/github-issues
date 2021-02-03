/* global describe, it, expect  */

import { put, call } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import api, { SERVER_ERRORS } from 'src/packages/api';
import { saveToken } from 'src/actions/auth';

import handleSubmit from '../handleSubmit';
import { toggleLoading, submitForm } from '../../actions';
import { FETCH_PARAMS } from './mocks';

describe('[screen][Home] saga', () => {
  it('[handleSubmit] success', async () => {
    Navigation.push = jest.fn();

    const generator = handleSubmit(
      submitForm({
        organization: 'test',
        repository: 'test',
        token: 'test',
      })
    );

    let next = generator.next();
    expect(next.value).toEqual(put(toggleLoading()));

    next = generator.next();

    expect(next.value).toEqual(call(api.issues.fetchIssues, FETCH_PARAMS));

    next = generator.next({ issues: [], issuesCount: 0, pageInfo: {} });
    expect(next.value).toEqual(put(saveToken('test')));

    next = generator.next();
    expect(next.value).toEqual(put(toggleLoading()));

    next = generator.next();
    expect(next.done).toEqual(true);
  });

  it('[handleSubmit] error', async () => {
    Navigation.push = jest.fn();

    const generator = handleSubmit(
      submitForm({
        organization: 'test',
        repository: 'test',
        token: 'test',
      })
    );

    let next = generator.next();
    expect(next.value).toEqual(put(toggleLoading()));

    next = generator.next();

    expect(next.value).toEqual(call(api.issues.fetchIssues, FETCH_PARAMS));

    next = generator.throw(SERVER_ERRORS.NOT_FOUND);
    expect(next.value).toEqual(put(toggleLoading()));

    next = generator.next();
    expect(next.done).toEqual(true);
  });
});
