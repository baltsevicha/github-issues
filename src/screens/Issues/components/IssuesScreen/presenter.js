import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initIssues, resetIssues } from '../../actions';

export default ({
  componentId,
  organization,
  repository,
  issuesCount,
  issues,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      initIssues({ componentId, organization, repository, issues, issuesCount })
    );
    return () => {
      dispatch(resetIssues());
    };
  }, []);

  return { organization, repository, issuesCount };
};
