/* global describe, it, expect  */

import request from '../index';
import { createFetch, removeFetch } from './helpers/simulateFetch';

import {
  RANDOM_REQUEST_WITH_BODY,
  RANDOM_REQUEST_WITH_GET_PARAMS,
} from './mocks';

describe('[package][api] request', () => {
  it('POST/PATCH/PUT fetch with random params', (done) => {
    createFetch();

    const spy = jest.spyOn(global, 'fetch');

    request(RANDOM_REQUEST_WITH_BODY.INPUT);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(...RANDOM_REQUEST_WITH_BODY.OUTPUT);

    removeFetch();
    done();
  });

  it('GET fetch with random params', (done) => {
    createFetch();

    const spy = jest.spyOn(global, 'fetch');

    request(RANDOM_REQUEST_WITH_GET_PARAMS.INPUT);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(...RANDOM_REQUEST_WITH_GET_PARAMS.OUTPUT);

    removeFetch();
    done();
  });
});
