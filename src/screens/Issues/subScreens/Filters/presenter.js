import { useSelector, useDispatch } from 'react-redux';

import { ISSUES_STATE, ISSUES_SORT_FIELDS } from 'src/constants/issues';

import selectors from '../../selectors';
import { loadOtherState, loadOtherSort } from '../../actions';

export default () => {
  const dispatch = useDispatch();

  const selectedState = useSelector(selectors.getSelectedState);
  const onStateChange = (value) => dispatch(loadOtherState(value));

  const states = Object.keys(ISSUES_STATE).map((key) => ({
    label: key,
    value: ISSUES_STATE[key],
  }));

  const selectedSort = useSelector(selectors.getSelectedSort);
  const onSortChange = (value) => dispatch(loadOtherSort(value));

  const sorts = Object.keys(ISSUES_SORT_FIELDS).map((key) => ({
    label: key,
    value: ISSUES_SORT_FIELDS[key],
  }));

  return {
    selectedState,
    selectedSort,
    onStateChange,
    onSortChange,
    states,
    sorts,
  };
};
