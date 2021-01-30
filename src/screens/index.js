import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';

import HomeScreen from './Home';
import ErrorScreen from './Error';

export const registerScreens = (storeWrapper) => {
  Navigation.registerComponent(
    SCREENS.HOME,
    storeWrapper(HomeScreen),
    () => HomeScreen
  );

  Navigation.registerComponent(
    SCREENS.ERROR,
    storeWrapper(ErrorScreen),
    () => ErrorScreen
  );
};
