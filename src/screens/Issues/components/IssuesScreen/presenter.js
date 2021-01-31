import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initIssues, resetIssues } from '../../actions';

export default ({ organization, repository, issuesCount, issues }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initIssues({ issues, issuesCount }));
    return () => {
      dispatch(resetIssues());
    };
  }, []);

  return { organization, repository, issuesCount };
};
