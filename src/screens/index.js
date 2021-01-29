import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';

import Home from './Home';

export const registerScreens = (ProviderWrapper) => {
  Navigation.registerComponent(SCREENS.HOME, ProviderWrapper(Home), () => Home);
};
