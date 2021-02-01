import { useDispatch, useSelector } from 'react-redux';

import { toggleIssueFavorite } from 'src/actions/favorite';
import favoriteSelectors from 'src/selectors/favorite';

export default ({ issue }) => {
  const dispatch = useDispatch();
  const favoriteIssues = useSelector(favoriteSelectors.getFavoriteIssues);

  return {
    issue,
    isFavoriteIssue: Boolean(favoriteIssues[issue.id]),
    onClick: () => dispatch(toggleIssueFavorite(issue)),
  };
};
