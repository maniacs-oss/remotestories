/* @flow */

import type { Action } from 'src/types';
import { FETCH, RECEIVE } from 'src/actions/stories';
import { Map, Record } from 'immutable';

export const StoryState = Record({
  isFetched: false,
  isFetching: false,
});

export type State = Map<number, StoryState>;

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

function storyReducer(state: StoryState = new StoryState(), action: Action) {
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

export function findStory(state: State, id: number) {
  return state.get(id) || new StoryState();
}
