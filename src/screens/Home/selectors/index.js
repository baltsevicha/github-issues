const getState = (state) => state.screens.home;

const getIsLoading = (state) => getState(state).isLoading;

export default {
  getIsLoading,
};
