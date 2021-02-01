import { createReducer } from '@reduxjs/toolkit';

import { toggleIssueFavorite } from '../actions/favorite';

export default createReducer(
  {},
  {
    [toggleIssueFavorite.type]: (state, action) => {
      const { id } = action.payload;

      if (state[id]) {
        const copiedIssues = Object.assign({}, state);
        delete copiedIssues[id];
        return copiedIssues;
      }

      return {
        ...state,
        [id]: action.payload,
      };
    },
  }
);
