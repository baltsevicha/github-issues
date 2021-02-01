import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';

import selectors from '../../selectors';

export default () => {
  const listRef = useRef();

  const issues = useSelector(selectors.getIssues);
  const componentId = useSelector(selectors.getComponentId);

  const goToIssue = (issue) => () =>
    Navigation.push(componentId, {
      component: {
        name: SCREENS.ISSUE_DETAILS,
        passProps: {
          issue,
        },
      },
    });

  useEffect(() => {
    listRef.current.scrollToOffset({ offset: 0 });
  }, [issues]);

  return { issues, listRef, goToIssue };
};
