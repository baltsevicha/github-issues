import { useSelector, useDispatch } from 'react-redux';

import { changeCurrentPage } from '../../../actions';
import selectors from '../../../selectors';

export default (pagesCount) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectors.getCurrentPage);

  const startIndex = currentPage - 1;
  const finishIndex = currentPage + 1;

  let items = [];
  const changePage = (index) => () => dispatch(changeCurrentPage(index));

  if (startIndex > 1) {
    items = items.concat([
      { key: 0, title: 1, isActive: false, onClick: changePage(0) },
      { key: 1, title: '...', isActive: false, onClick: null },
    ]);
  }

  if (startIndex === 1) {
    items.push({
      key: 0,
      title: 1,
      isActive: false,
      onClick: changePage(0),
    });
  }

  for (let i = startIndex; i <= finishIndex; i++) {
    if (i < 0 || i > pagesCount - 1) {
      continue;
    }

    const isActive = i === currentPage;

    items.push({
      key: i,
      title: (i + 1).toString(),
      isActive,
      onClick: isActive ? null : changePage(i),
    });
  }

  if (finishIndex === pagesCount - 2) {
    items.push({
      key: pagesCount - 1,
      title: pagesCount,
      isActive: false,
      onClick: changePage(pagesCount - 1),
    });
  }

  if (finishIndex < pagesCount - 2) {
    items = items.concat([
      { key: pagesCount - 2, title: '...', isActive: false, onClick: null },
      {
        key: pagesCount - 1,
        title: pagesCount,
        isActive: false,
        onClick: changePage(pagesCount - 1),
      },
    ]);
  }

  return {
    items,
  };
};
