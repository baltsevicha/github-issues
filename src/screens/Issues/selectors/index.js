const getState = (state) => state.screens.issues;

const getIssues = (state) => getState(state).issues;
const getIssuesCount = (state) => getState(state).issuesCount;
const getCurrentPage = (state) => getState(state).currentPage;

export default {
  getIssues,
  getIssuesCount,
  getCurrentPage,
};
