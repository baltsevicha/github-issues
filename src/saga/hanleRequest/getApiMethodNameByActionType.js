function toCamelCase(actionType) {
  return actionType.split('_').reduce((memo, item, index) => {
    if (index === 0) {
      return item.toLowerCase();
    }

    return memo + item.charAt(0) + item.slice(1).toLowerCase();
  }, '');
}

export default (actionType) => {
  const actionTypeWithoutNamespace = actionType.split('::')[1] || actionType;

  const apiMethod = actionTypeWithoutNamespace.split('_REQUEST')[0];

  return toCamelCase(apiMethod);
};
