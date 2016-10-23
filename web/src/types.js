/* @flow */

import type { CREATE_COMMENT_ACTION } from 'src/actions/comments';
import type { Dispatch as ReduxDispatch } from 'redux';

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
  ;

export type Dispatch = ReduxDispatch<Action>;
