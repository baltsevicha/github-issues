import request from '../request';
import { SERVER_ERRORS, TOKEN } from '../constants';

export const fetchIssuesWithCount = async (data) => {
  const response = await Promise.all([
    fetchIssues(data),
    fetchIssuesCount(data),
  ]);

  return {
    issues: response[0].issues,
    issuesCount: response[1].issuesCount,
  };
};

const fetchIssues = async (data) => {
  const { organization, repository, perPage, page, state } = data;

  const response = await request({
    url: `/repos/${organization}/${repository}/issues`,
    method: 'GET',
    params: {
      per_page: perPage,
      page,
      state: state.toLowerCase(),
    },
  });

  if (response && response.message === 'Not Found') {
    throw { message: SERVER_ERRORS.NOT_FOUND };
  }

  return {
    issues: response,
  };
};

const fetchIssuesCount = async (data) => {
  const { organization, repository, state } = data;

  const stateQuery = state === 'ALL' ? '' : `(states: ${state})`;

  const response = await request({
    url: '/graphql',
    method: 'POST',
    headers: {
      authorization: TOKEN,
    },
    body: {
      query: `
        query {
          repository(owner:"${organization}", name:"${repository}") { 
            issues${stateQuery} {
              totalCount,
            }
          }
        }
      `,
    },
  });

  return {
    issuesCount: response.data.repository.issues.totalCount,
  };
};
