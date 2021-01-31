import { useSelector, useDispatch } from 'react-redux';

import { loadNextPage } from '../../../actions';
import selectors from '../../../selectors';

export default () => {
  const dispatch = useDispatch();

  const hasPagination = useSelector(selectors.getHasPagination);
  const paginationList = useSelector(selectors.getPaginationList);
  const isDisabledPagination = useSelector(selectors.getIsDisabledPagination);

  const changePage = (index) => () => dispatch(loadNextPage(index));

  const paginationListWithActions = paginationList.map((item, index) => {
    if (item.title === '...' || item.isActive) {
      return item;
    }

    return {
      ...item,
      onClick: changePage(item.key),
    };
  });

  return {
    hasPagination,
    paginationList: paginationListWithActions,
    isDisabledPagination,
  };
};
