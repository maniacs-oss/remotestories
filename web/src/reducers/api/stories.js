/* @flow */

import type { Action } from 'src/types';
import { FETCH, RECEIVE } from 'src/actions/stories';
import { Map, Record } from 'immutable';

export const StoryApiState = Record({
  isFetched: false,
  isFetching: false,
});

export type State = Map<number, StoryApiState>;

export default function reducer(state: State = new Map(), action: Action) {
  switch (action.type) {
    case FETCH:
    case RECEIVE:
      return state
        .update(action.id, (story) =>
          storyReducer(story, action)
        );
    default:
      return state;
  }
}

function storyReducer(state: StoryApiState = new StoryApiState(), action: Action) {
  switch (action.type) {
    case FETCH:
      return state
        .set('isFetching', true);
    case RECEIVE:
      return state.withMutations((newState) =>
        newState
          .set('isFetched', true)
          .set('isFetching', false)
      );
    default:
      return state;
  }
}
