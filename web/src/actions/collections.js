/* @flow */

import type { ThunkAction } from 'src/types';
import { findCollectionApi } from 'src/selectors';

export const FETCH = 'collections/FETCH';
export const RECEIVE = 'collections/RECEIVE';

export function fetchCollection({ name, page }: { name: string, page: number }): ThunkAction {
  return (dispatch, getState, api) => {
    const collectionApi = findCollectionApi(getState(), name);

    if (collectionApi.isFetching || collectionApi.page === page) {
      return;
    }

    dispatch({ type: FETCH, name, page });

    const filter = name === '/' ? 'popular' : 'newest';

    api.stories.findAll({ filter, page }).then(({ body }) => {
      const { reactions, stories, meta } = body;
      dispatch({ type: RECEIVE, name, reactions, stories, totalPages: meta.total_pages });
    });
  };
}
