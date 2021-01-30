import request from '../request';
import { SERVER_ERRORS } from '../constants';

export const fetchIssues = async (data) => {
  const { organization, repository } = data;

  const response = await Promise.all([
    request({
      url: `/repos/${organization}/${repository}/issues?per_page=25&page=0`,
      method: 'GET',
    }),
    request({
      url: `/repos/${organization}/${repository}`,
      method: 'GET',
    }),
  ]);

  if (response[0] && response[0].message === 'Not Found') {
    throw { message: SERVER_ERRORS.NOT_FOUND };
  }

  return {
    issues: response[0],
    issuesCount: response[1].open_issues_count,
  };
};
