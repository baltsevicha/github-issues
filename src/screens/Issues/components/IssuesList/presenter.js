import { useSelector } from 'react-redux';

import selectors from '../../selectors';

export default () => {
  const issues = useSelector(selectors.getIssues);

  return { issues };
};
