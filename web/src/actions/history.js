/* @flow */

import type { Action } from 'src/types';

export const PUSH = 'history/PUSH';
export const RECEIVE = 'history/RECEIVE';

export function receiveHistory({ history }: { history: any }): Action {
  return { type: RECEIVE, history };
}

export function pushHistory({ path }: { path: string }): Action {
  return { type: PUSH, path };
}
