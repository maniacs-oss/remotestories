/* @flow */

import type { ThunkAction } from 'src/types';
import { REACTIONS, STORIES } from 'src/constants';
import { findCollection } from 'src/reducers/api/collections';

export const FETCH = 'collections/FETCH';
export const RECEIVE = 'collections/RECEIVE';

const TOTAL_PAGES = {
  '/': 2,
  '/new': 2,
  '/popular': 1,
};

const PAGED_COLLECTIONS = {
  '/': {
    '1': { stories: [STORIES[0], STORIES[1]], reactions: [REACTIONS[0], REACTIONS[1]] },
    '2': { stories: [STORIES[2]], reactions: [] },
  },
  '/new': {
    '1': { stories: [STORIES[0], STORIES[1]], reactions: [REACTIONS[0], REACTIONS[1]] },
    '2': { stories: [STORIES[2], STORIES[3]], reactions: [] },
  },
  '/popular': {
    '1': { stories: [STORIES[0]], reactions: [REACTIONS[0]] },
  },
};

export function fetchCollection({ name, page }: { name: string, page: number }): ThunkAction {
  return (dispatch, getState) => {
    const collectionApi = findCollection(getState().api.collections, name);
    if (collectionApi.isFetching || collectionApi.page === page) return;

    dispatch({ type: FETCH, name, page });

    // do async stuff here
    // ...
    // end

    const totalPages = TOTAL_PAGES[name];
    const { reactions, stories } = PAGED_COLLECTIONS[name][`${ page }`];

    dispatch({ type: RECEIVE, name, reactions, stories, totalPages });
  };
}
