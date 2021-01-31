export default (pagesCount, currentPage, nextPage) => {
  const startIndex = currentPage - 1;
  const finishIndex = currentPage + 1;

  let items = [];

  if (startIndex > 1) {
    items = items.concat([
      { key: 0, title: 1, isActive: false, isLoading: nextPage === 0 },
      { key: 1, title: '...', isActive: false, isLoading: false },
    ]);
  }

  if (startIndex === 1) {
    items.push({
      key: 0,
      title: 1,
      isActive: false,
      isLoading: nextPage === 0,
    });
  }

  for (let i = startIndex; i <= finishIndex; i++) {
    if (i < 0 || i > pagesCount - 1) {
      continue;
    }

    const isActive = i === currentPage;
    const isLoading = !isActive && i === nextPage;

    items.push({ key: i, title: (i + 1).toString(), isActive, isLoading });
  }

  if (finishIndex === pagesCount - 2) {
    items.push({
      key: pagesCount - 1,
      title: pagesCount,
      isActive: false,
      isLoading: nextPage === pagesCount - 1,
    });
  }

  if (finishIndex < pagesCount - 2) {
    items = items.concat([
      { key: pagesCount - 2, title: '...', isActive: false, isLoading: false },
      {
        key: pagesCount - 1,
        title: pagesCount,
        isActive: false,
        isLoading: nextPage === pagesCount - 1,
      },
    ]);
  }

  return items;
};
