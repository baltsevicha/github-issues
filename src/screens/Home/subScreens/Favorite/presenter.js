import { useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import favoriteSelectors from 'src/selectors/favorite';

export default ({ componentId }) => {
  const favoriteIssues = useSelector(favoriteSelectors.getFavoriteIssues);

  const goToIssue = (issue) => () =>
    Navigation.push(componentId, {
      component: {
        name: SCREENS.ISSUE_DETAILS,
        passProps: {
          issue,
        },
      },
    });

  return {
    favoriteIssues: Object.values(favoriteIssues),
    goToIssue,
  };
};
