/* @flow */

import type { PUSH_HISTORY_ACTION, RECEIVE_HISTORY_ACTION } from 'src/actions/history';
import { PUSH, RECEIVE } from 'src/actions/history';

type State = any;

type Action =
  | PUSH_HISTORY_ACTION
  | RECEIVE_HISTORY_ACTION
  ;

const INITIAL_STATE = null;

export default function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case RECEIVE:
      return action.history;
    case PUSH:
      state.push(action.path);
      return state;
    default:
      return state;
  }
}
