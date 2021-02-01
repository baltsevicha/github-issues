import { useSelector, useDispatch } from 'react-redux';

import { ISSUES_STATE } from 'src/constants/issues';

import selectors from '../../selectors';
import { loadOtherState } from '../../actions';

export default () => {
  const dispatch = useDispatch();

  const selectedState = useSelector(selectors.getSelectedState);
  const onValueChange = (value) => dispatch(loadOtherState(value));

  const items = Object.keys(ISSUES_STATE).map((key) => ({
    label: key,
    value: ISSUES_STATE[key],
  }));

  return {
    selectedState,
    onValueChange,
    items,
  };
};
