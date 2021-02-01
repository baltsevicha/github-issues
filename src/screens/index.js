import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';

import HomeScreen, { registerHomeSubScreensAndComponents } from './Home';
import ErrorScreen from './Error';
import IssuesScreen, { registerIssuesSubScreensAndComponents } from './Issues';
import IssuesDetails from './IssuesDetails';

export const registerScreensWithComponents = (storeWrapper) => {
  Navigation.registerComponent(
    SCREENS.HOME,
    storeWrapper(HomeScreen),
    () => HomeScreen
  );

  Navigation.registerComponent(
    SCREENS.ISSUES,
    storeWrapper(IssuesScreen),
    () => IssuesScreen
  );

  Navigation.registerComponent(
    SCREENS.ERROR,
    storeWrapper(ErrorScreen),
    () => ErrorScreen
  );

  Navigation.registerComponent(
    SCREENS.ISSUE_DETAILS,
    storeWrapper(IssuesDetails),
    () => IssuesDetails
  );

  registerHomeSubScreensAndComponents(storeWrapper);
  registerIssuesSubScreensAndComponents(storeWrapper);
};
