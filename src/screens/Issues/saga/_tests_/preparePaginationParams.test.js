/* global describe, it, expect  */

import { select } from 'redux-saga/effects';

import preparePaginationParams from '../preparePaginationParams';
import selectors from '../../selectors';

describe('[screen][Issues] saga', () => {
  it('[preparePaginationParams] first page', async () => {
    const generator = preparePaginationParams();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getNextPage));

    next = generator.next(0);
    expect(next.value).toEqual(select(selectors.getPagesCount));

    next = generator.next(5);
    expect(next.value).toEqual(select(selectors.getIssuesCount));

    next = generator.next(124);
    expect(next.value).toEqual({ first: 25 });
    expect(next.done).toEqual(true);
  });

  it('[preparePaginationParams] next page', async () => {
    const generator = preparePaginationParams();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getNextPage));

    next = generator.next(1);
    expect(next.value).toEqual(select(selectors.getPagesCount));

    next = generator.next(5);
    expect(next.value).toEqual(select(selectors.getIssuesCount));

    next = generator.next(124);
    expect(next.value).toEqual(select(selectors.getCurrentPage));

    next = generator.next(0);
    expect(next.value).toEqual(select(selectors.getPageInfo));

    next = generator.next({ endCursor: 'cursor' });
    expect(next.value).toEqual({
      first: 25,
      after: 'cursor',
    });
    expect(next.done).toEqual(true);
  });

  it('[preparePaginationParams] prev page', async () => {
    const generator = preparePaginationParams();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getNextPage));

    next = generator.next(1);
    expect(next.value).toEqual(select(selectors.getPagesCount));

    next = generator.next(5);
    expect(next.value).toEqual(select(selectors.getIssuesCount));

    next = generator.next(124);
    expect(next.value).toEqual(select(selectors.getCurrentPage));

    next = generator.next(2);
    expect(next.value).toEqual(select(selectors.getPageInfo));

    next = generator.next({ startCursor: 'cursor' });
    expect(next.value).toEqual({
      last: 25,
      before: 'cursor',
    });
    expect(next.done).toEqual(true);
  });

  it('[preparePaginationParams] last page', async () => {
    const generator = preparePaginationParams();

    let next = generator.next();
    expect(next.value).toEqual(select(selectors.getNextPage));

    next = generator.next(4);
    expect(next.value).toEqual(select(selectors.getPagesCount));

    next = generator.next(5);
    expect(next.value).toEqual(select(selectors.getIssuesCount));

    next = generator.next(124);
    expect(next.value).toEqual({ last: 24 });
    expect(next.done).toEqual(true);
  });
});
