const getState = (state) => state.screens.issues;

const getIssues = (state) => getState(state).issues;

export default {
  getIssues,
};
