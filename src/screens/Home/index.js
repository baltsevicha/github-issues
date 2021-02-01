import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import { COMPONENTS } from 'src/constants/components';

import HomeScreen from './components/HomeScreen';
import FavoriteComponent from './components/Favorite';
import FavoriteScreen from './subScreens/Favorite';

export default HomeScreen;

export const registerHomeSubScreensAndComponents = (storeWrapper) => {
  Navigation.registerComponent(
    COMPONENTS.FAVORITE,
    storeWrapper(FavoriteComponent),
    () => FavoriteComponent
  );

  Navigation.registerComponent(
    SCREENS.HOME_FAVORITE,
    storeWrapper(FavoriteScreen),
    () => FavoriteScreen
  );
};
