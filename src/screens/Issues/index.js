import { Navigation } from 'react-native-navigation';

import { SCREENS } from 'src/constants/screens';
import { COMPONENTS } from 'src/constants/components';

import IssuesScreen from './components/IssuesScreen';
import FiltersComponent from './components/Filters';
import FiltersSubScreen from './subScreens/Filters';

export default IssuesScreen;

export const registerIssuesSubScreensAndComponents = (storeWrapper) => {
  Navigation.registerComponent(
    COMPONENTS.ISSUES_FILTERS,
    storeWrapper(FiltersComponent),
    () => FiltersComponent
  );

  Navigation.registerComponent(
    SCREENS.ISSUES_FILTERS,
    storeWrapper(FiltersSubScreen),
    () => FiltersSubScreen
  );
};
