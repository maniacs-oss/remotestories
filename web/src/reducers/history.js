/* @flow */

import type { Action } from 'src/types';
import { PUSH, RECEIVE } from 'src/actions/history';

export type State = any;

export default function reducer(state: State = null, action: Action): State {
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
