import { useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';

import selectors from '../../selectors';

export default () => {
  const componentId = useSelector(selectors.getComponentId);

  return {
    onClick: () =>
      Navigation.push(componentId, {
        component: {
          name: SCREENS.HOME_FAVORITE,
        },
      }),
  };
};
