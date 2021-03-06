import { useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import utils from 'src/packages/utils';
import { SCREENS } from 'src/constants/screens';
import favoriteSelectors from 'src/selectors/favorite';

export default ({ componentId }) => {
  const favoriteIssues = useSelector(favoriteSelectors.getFavoriteIssues);

  const goToIssue = (issue) =>
    utils.throttle(
      () =>
        Navigation.push(componentId, {
          component: {
            name: SCREENS.ISSUE_DETAILS,
            passProps: {
              issue,
            },
          },
        }),
      2000
    );

  return {
    favoriteIssues: Object.values(favoriteIssues),
    goToIssue,
  };
};
