/* global describe, it, expect  */

import { select, call, put } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import api from 'src/packages/api';
import authSelectors from 'src/selectors/auth';

import updateScreen from '../updateScreen';
import preparePaginationParams from '../preparePaginationParams';
import selectors from '../../selectors';
import {
  updateIssues,
  updateCurrentPage,
  updateIssuesCount,
  updatePageInfo,
  updateNextPage,
} from '../../actions';
import { FETCH_ISSUE_PARAMS } from './mocks';

describe('[screen][Issues] saga', () => {
  it('[updateScreen] success', async () => {
    const generator = updateScreen();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getComponentId));

    next = generator.next('component-id');
    expect(next.value).toEqual(select(selectors.getOrganization));

    next = generator.next(FETCH_ISSUE_PARAMS.organization);
    expect(next.value).toEqual(select(selectors.getRepository));

    next = generator.next(FETCH_ISSUE_PARAMS.repository);
    expect(next.value).toEqual(select(selectors.getNextPage));

    next = generator.next(2);
    expect(next.value).toEqual(select(selectors.getCurrentPage));

    next = generator.next(1);
    expect(next.value).toEqual(select(selectors.getSelectedState));

    next = generator.next(FETCH_ISSUE_PARAMS.state);
    expect(next.value).toEqual(select(selectors.getSelectedSort));

    next = generator.next(FETCH_ISSUE_PARAMS.sort);
    expect(next.value).toEqual(select(authSelectors.getToken));

    next = generator.next(FETCH_ISSUE_PARAMS.token);
    expect(next.value).toEqual(call(preparePaginationParams));

    next = generator.next({
      last: FETCH_ISSUE_PARAMS.last,
      before: FETCH_ISSUE_PARAMS.before,
    });

    expect(next.value).toEqual(
      call(api.issues.fetchIssues, FETCH_ISSUE_PARAMS)
    );

    next = generator.next({ issues: [], issuesCount: 0, pageInfo: {} });
    expect(next.value).toEqual(put(updateIssuesCount(0)));

    next = generator.next();
    expect(next.value).toEqual(put(updateIssues([])));

    next = generator.next();
    expect(next.value).toEqual(put(updateCurrentPage(2)));

    next = generator.next();
    expect(next.value).toEqual(put(updatePageInfo({})));

    next = generator.next();
    expect(next.done).toEqual(true);
  });

  it('[updateScreen] error', async () => {
    Navigation.push = jest.fn();

    const generator = updateScreen();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getComponentId));

    next = generator.next('component-id');
    expect(next.value).toEqual(select(selectors.getOrganization));

    next = generator.next(FETCH_ISSUE_PARAMS.organization);
    expect(next.value).toEqual(select(selectors.getRepository));

    next = generator.next(FETCH_ISSUE_PARAMS.repository);
    expect(next.value).toEqual(select(selectors.getNextPage));

    next = generator.next(2);
    expect(next.value).toEqual(select(selectors.getCurrentPage));

    next = generator.next(1);
    expect(next.value).toEqual(select(selectors.getSelectedState));

    next = generator.next(FETCH_ISSUE_PARAMS.state);
    expect(next.value).toEqual(select(selectors.getSelectedSort));

    next = generator.next(FETCH_ISSUE_PARAMS.sort);
    expect(next.value).toEqual(select(authSelectors.getToken));

    next = generator.next(FETCH_ISSUE_PARAMS.token);
    expect(next.value).toEqual(call(preparePaginationParams));

    next = generator.next({
      last: FETCH_ISSUE_PARAMS.last,
      before: FETCH_ISSUE_PARAMS.before,
    });

    expect(next.value).toEqual(
      call(api.issues.fetchIssues, FETCH_ISSUE_PARAMS)
    );

    next = generator.throw('SOME ERROR');
    expect(next.value).toEqual(put(updateNextPage(1)));

    next = generator.next();
    expect(next.done).toEqual(true);
  });
});
