import { Navigation } from 'react-native-navigation';

import { SCREENS } from './constants/screens';
import { ProviderWrapper } from './redux';
import { registerScreens } from './screens';

registerScreens(ProviderWrapper);

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
