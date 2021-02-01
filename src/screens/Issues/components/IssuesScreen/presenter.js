import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initIssues, resetIssues } from '../../actions';
import selectors from '../../selectors';

export default (props) => {
  const dispatch = useDispatch();
  const selectedState = useSelector(selectors.getSelectedState);
  const selectedSort = useSelector(selectors.getSelectedSort);
  const issuesCount = useSelector(selectors.getIssuesCount);

  useEffect(() => {
    dispatch(initIssues(props));
    return () => {
      dispatch(resetIssues());
    };
  }, []);

  return {
    organization: props.organization,
    repository: props.repository,
    issuesCount,
    selectedState: selectedState.toLowerCase(),
    selectedSort: selectedSort.toLowerCase(),
  };
};
