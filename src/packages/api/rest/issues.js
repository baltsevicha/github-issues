import request from '../request';
import { SERVER_ERRORS, TOKEN } from '../constants';

function prepareIssuesParams(data) {
  const { first, last, after, before, state, sort } = data;

  const result = [];

  if (first) {
    result.push(`first: ${first}`);
  }

  if (last) {
    result.push(`last: ${last}`);
  }

  if (after) {
    result.push(`after: "${after}"`);
  }

  if (before) {
    result.push(`before: "${before}"`);
  }

  if (state !== 'ALL') {
    result.push(`states: ${state.toUpperCase()}`);
  }

  if (sort) {
    result.push(`orderBy: { field: ${sort.toUpperCase()}, direction: DESC }`);
  }

  return `(${result.join(', ')})`;
}

export const fetchIssues = async (data) => {
  const { organization, repository, token } = data;

  const filters = prepareIssuesParams(data);

  const response = await request({
    url: '/graphql',
    method: 'POST',
    headers: {
      authorization: `token ${token}`,
    },
    body: {
      query: `
        query {
          repository(owner:"${organization}", name:"${repository}") { 
            issues${filters} {
              totalCount,
              nodes {
                id,
                number,
                title,
                comments {
                  totalCount
                }
              }
              pageInfo {
                endCursor
                startCursor
              }
            }
          }
        }
      `,
    },
  });

  if (response.message === 'Bad credentials') {
    throw { message: SERVER_ERRORS.BAD_CREDENTIALS };
  }

  if (response.errors && response.errors[0].type === SERVER_ERRORS.NOT_FOUND) {
    throw { message: SERVER_ERRORS.NOT_FOUND };
  }

  return {
    issues: response.data.repository.issues.nodes,
    issuesCount: response.data.repository.issues.totalCount,
    pageInfo: response.data.repository.issues.pageInfo,
  };
};
