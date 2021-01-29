import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';

import Home from './Home';

export const registerScreens = (storeWrapper) => {
  Navigation.registerComponent(SCREENS.HOME, storeWrapper(Home), () => Home);
};
