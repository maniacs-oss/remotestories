/* @flow */

import type { CREATE_COMMENT_ACTION } from 'src/actions/comments';
import type { CREATE_STORY_ACTION } from 'src/actions/stories';
import type { Dispatch as ReduxDispatch } from 'redux';
import type { PUSH_HISTORY_ACTION, RECEIVE_HISTORY_ACTION } from 'src/actions/history';

export type Story = {
  id: number,
  body: string,
  comment_ids: Array<number>,
  created_at: string,
};

export type Comment = {
  id: number,
  body: string,
  story_id: number,
  user_id: number,
  created_at: string,
};

export type Action =
  | CREATE_COMMENT_ACTION
  | CREATE_STORY_ACTION
  | PUSH_HISTORY_ACTION
  | RECEIVE_HISTORY_ACTION
  ;

type DispatchThunk = (dispatch: any, getState?: () => Object) => any;
export type Dispatch = ReduxDispatch<Action> | DispatchThunk;
