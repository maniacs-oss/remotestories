/* @flow */

import type { Dispatch } from 'src/types';

export type RECEIVE_HISTORY_ACTION = {
  type: 'history/RECEIVE',
  history: any,
};

export type PUSH_HISTORY_ACTION = {
  type: 'history/PUSH',
  path: string,
};

export const PUSH = 'history/PUSH';
export const RECEIVE = 'history/RECEIVE';

export function receiveHistory({ history }: { history: any }): RECEIVE_HISTORY_ACTION {
  return { type: RECEIVE, history };
}

export function pushHistory({ path }: { path: string }) {
  return { type: PUSH, path };
}
