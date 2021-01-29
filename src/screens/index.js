import { Navigation } from 'react-native-navigation';

import Home from './Home';

export const registerScreens = () => {
  Navigation.registerComponent(SCREENS.HOME, () => Home);
};

export const SCREENS = {
  HOME: 'Home',
};
