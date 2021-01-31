import request from '../request';
import { SERVER_ERRORS } from '../constants';

export const fetchIssues = async (data) => {
  const { organization, repository, perPage, page } = data;

  const response = await Promise.all([
    fetchIssuesWithPagination({ organization, repository, perPage, page }),
    request({
      url: `/repos/${organization}/${repository}`,
      method: 'GET',
    }),
  ]);

  return {
    issues: response[0].issues,
    issuesCount: response[1].open_issues_count,
  };
};

export const fetchIssuesWithPagination = async (data) => {
  const { organization, repository, perPage, page } = data;

  const response = await request({
    url: `/repos/${organization}/${repository}/issues`,
    method: 'GET',
    params: {
      per_page: perPage,
      page,
    },
  });

  if (response && response.message === 'Not Found') {
    throw { message: SERVER_ERRORS.NOT_FOUND };
  }

  return {
    issues: response,
  };
};
