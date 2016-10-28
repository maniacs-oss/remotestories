/* @flow */

import type { CREATE_COMMENT_ACTION } from 'src/actions/comments';
import type { Comment } from 'src/types';
import { Map } from 'immutable';
import { CREATE } from 'src/actions/comments';

type State = Map<number, Comment>;

type Action =
  | CREATE_COMMENT_ACTION
  ;

const COMMENTS = [
  {
    id: 1,
    body: 'Man.. I am sorry you had to burn a persy day just to avoid the office..',
    story_id: 1,
    user_id: 1,
    created_at: '2016-10-08T10:10:39.032Z',
  },
  {
    id: 2,
    body: 'What?',
    story_id: 1,
    user_id: 2,
    created_at: '2016-10-08T10:11:43.088Z',
  },
];

const INITIAL_STATE = COMMENTS.reduce(
  (state, comment) => state.set(comment.id, comment),
  new Map(),
);

export default function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case CREATE:
      return createCommentReducer(state, action);
    default:
      return state;
  }
}

function createCommentReducer(state: State, { comment }: { comment: Comment }): State {
  return state.set(comment.id, comment);
}
