import { Navigation } from 'react-native-navigation';

import { SCREENS } from './constants/screens';
import { registerScreens } from './screens';
import createStoreWrapper from './createStoreWrapper';

const storeWrapper = createStoreWrapper();
registerScreens(storeWrapper);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREENS.HOME,
            },
          },
        ],
      },
    },
  });
});
