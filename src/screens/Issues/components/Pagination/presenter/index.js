import { useSelector } from 'react-redux';

import { ISSUES_PER_PAGE } from 'src/constants/issues';

import selectors from '../../../selectors';
import usePagination from './pagination';

export default () => {
  const issuesCount = useSelector(selectors.getIssuesCount);
  const pagesCount = Math.ceil(issuesCount / ISSUES_PER_PAGE);
  const pagination = usePagination(pagesCount);

  return {
    hasPagination: pagesCount > 1,
    paginationList: pagination.items,
  };
};
