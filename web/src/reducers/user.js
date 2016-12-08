/* @flow */

import type { Action } from 'src/types';
import { CREATE as CREATE_REACTION } from 'src/actions/reactions';
import { RECEIVE } from 'src/actions/user';
import { Record } from 'immutable';

export const State = Record({
  id: 0,
  isPersisted: false,
  reactionIds: [],
});

export default function reducer(state: State = new State(), action: Action): State {
  switch (action.type) {
    case RECEIVE:
      return state
        .merge({ id: action.user.id, reactionIds: action.user.reaction_ids, isPersisted: true });
    case CREATE_REACTION:
      return state
        .update('reactionIds', (ids) => [...ids, action.reaction.id]);
    default:
      return state;
  }
}
