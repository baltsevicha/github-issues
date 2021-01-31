import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initIssues } from '../../actions';

export default ({ organization, repository, issuesCount, issues }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initIssues(issues));
  }, []);

  return { organization, repository, issuesCount };
};
