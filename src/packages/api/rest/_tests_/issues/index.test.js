/* global describe, it, expect  */

import * as Request from '../../../request';
import { fetchIssues } from '../../issues';
import { SERVER_ERRORS } from '../../../constants';

import {
  SUCCESS_RESPONSE,
  REPOSITORY_NOT_FOUND_RESPONSE,
  BAD_CREDENTIALS_RESPONSE,
} from './mocks';

jest.mock('../../../request', () => jest.fn());

describe('[package][api] rest', () => {
  it('[fetchIssues] success response', async () => {
    Request.default.mockImplementation(() => SUCCESS_RESPONSE);

    const spy = jest.spyOn(Request, 'default');

    const response = await fetchIssues({
      organization: 'test',
      repository: 'test',
      token: 'test',
      state: 'ALL',
      first: 25,
    });

    expect(response.issuesCount).toEqual(
      SUCCESS_RESPONSE.data.repository.issues.totalCount
    );
    expect(response.issues).toEqual(
      SUCCESS_RESPONSE.data.repository.issues.nodes
    );
    expect(response.pageInfo).toEqual(
      SUCCESS_RESPONSE.data.repository.issues.pageInfo
    );

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('[fetchIssues] repository not found', async () => {
    Request.default.mockImplementation(() => REPOSITORY_NOT_FOUND_RESPONSE);

    const spy = jest.spyOn(Request, 'default');

    try {
      await fetchIssues({
        organization: 'not found',
        repository: 'not found',
        token: 'not found',
        state: 'ALL',
        first: 25,
      });
    } catch (error) {
      expect(error.message).toEqual(SERVER_ERRORS.NOT_FOUND);
    }

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('[fetchIssues] bad credentials', async () => {
    Request.default.mockImplementation(() => BAD_CREDENTIALS_RESPONSE);

    const spy = jest.spyOn(Request, 'default');

    try {
      await fetchIssues({
        organization: 'not found',
        repository: 'not found',
        token: 'not found',
        state: 'ALL',
        first: 25,
      });
    } catch (error) {
      expect(error.message).toEqual(SERVER_ERRORS.BAD_CREDENTIALS);
    }

    expect(spy).toHaveBeenCalledTimes(3);
  });
});
