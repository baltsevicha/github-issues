import { Navigation } from 'react-native-navigation';

import { SCREENS } from './constants/screens';
import { registerScreensWithComponents } from './screens';
import createStoreWrapper from './createStoreWrapper';

const storeWrapper = createStoreWrapper();

registerScreensWithComponents(storeWrapper);

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
