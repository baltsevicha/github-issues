import { createSelector } from '@reduxjs/toolkit';

import { ISSUES_PER_PAGE } from 'src/constants/issues';

import generatePaginationList from './generatePaginationList';

const getState = (state) => state.screens.issues;

const getComponentId = (state) => getState(state).componentId;
const getOrganization = (state) => getState(state).organization;
const getRepository = (state) => getState(state).repository;
const getIssues = (state) => getState(state).issues;
const getIssuesCount = (state) => getState(state).issuesCount;
const getCurrentPage = (state) => getState(state).currentPage;
const getNextPage = (state) => getState(state).nextPage;
const getSelectedState = (state) => getState(state).selectedState;
const getSelectedSort = (state) => getState(state).selectedSort;

const getIsDisabledPagination = createSelector(
  getCurrentPage,
  getNextPage,
  (currentPage, nextPage) => currentPage !== nextPage
);

const getPagesCount = createSelector(getIssuesCount, (issuesCount) =>
  Math.ceil(issuesCount / ISSUES_PER_PAGE)
);

const getHasPagination = createSelector(
  getPagesCount,
  (pagesCount) => pagesCount > 1
);

const getPaginationList = createSelector(
  getPagesCount,
  getCurrentPage,
  getNextPage,
  generatePaginationList
);

export default {
  getComponentId,
  getOrganization,
  getRepository,
  getIssues,
  getCurrentPage,
  getNextPage,
  getIssuesCount,
  getHasPagination,
  getPaginationList,
  getIsDisabledPagination,
  getSelectedState,
  getSelectedSort,
};
