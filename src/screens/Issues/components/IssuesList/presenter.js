import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import selectors from '../../selectors';

export default () => {
  const listRef = useRef();

  const issues = useSelector(selectors.getIssues);

  useEffect(() => {
    listRef.current.scrollToOffset({ offset: 0 });
  }, [issues]);

  return { issues, listRef };
};
