/* @flow */

import type { Action } from 'src/types';
import { CREATE as CREATE_STORY } from 'src/actions/stories';
import { FETCH, RECEIVE } from 'src/actions/collections';
import { Map, Record } from 'immutable';

export const CollectionApiState = Record({
  page: 0,
  totalPages: 0,
  isFetching: false,
  storyIds: [],
})

export type State = Map<string, CollectionApiState>;

export default function reducer(state: State = new Map(), action: Action) {
  switch (action.type) {
    case CREATE_STORY:
      return state
        .update('/new', (collection) =>
          collectionReducer(collection, action)
        );
    case FETCH:
    case RECEIVE:
      return state
        .update(action.name, (collection) =>
          collectionReducer(collection, action)
        );
    default:
      return state;
  }
}

function collectionReducer(state: CollectionApiState = new CollectionApiState(), action: Action) {
  switch (action.type) {
    case CREATE_STORY:
      return state
        .update('storyIds', (ids) => [action.story.id, ...ids]);
    case FETCH:
      return state.withMutations((newState) =>
        newState
          .set('page', action.page)
          .set('isFetching', true)
      );
    case RECEIVE:
      return state.withMutations((newState) =>
        newState
          .set('storyIds', action.stories.map(({ id }) => id))
          .set('totalPages', action.totalPages)
          .set('isFetching', false)
      );
    default:
      return state;
  }
}
