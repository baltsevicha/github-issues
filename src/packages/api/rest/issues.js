import request from '../request';

export const fetchIssues = (data) => {
  const { organization, repository, perPage = 25, page = 0 } = data;

  return request({
    url: `/repos/${organization}/${repository}/issues?per_page=${perPage}&page=${page}`,
    method: 'GET',
  });
};
