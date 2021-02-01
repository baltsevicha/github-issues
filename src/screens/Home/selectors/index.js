const getState = (state) => state.screens.home;

const getIsLoading = (state) => getState(state).isLoading;
const getComponentId = (state) => getState(state).componentId;

export default {
  getIsLoading,
  getComponentId,
};
