/* @flow */

import type { Reaction } from 'src/types';
import { List } from 'immutable';

type State = List<Reaction>;

type Action = Object;

const REACTIONS = [
  {
    id: 1,
    type: 'laugh',
    story_id: 1,
    user_id: 1,
  },
  {
    id: 2,
    type: 'cold_sweat',
    story_id: 2,
    user_id: 1,
  },
];

const INITIAL_STATE = new List(REACTIONS);

export default function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
