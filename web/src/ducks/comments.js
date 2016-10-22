/* @flow */

import type { Comment } from 'src/types';
import { Map } from 'immutable';

type State = Map<number, Comment>;

type Action = {
  type?: any,
};

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
  new Map()
);

export default function reducer(state: State = INITIAL_STATE, action: Action = {}) {
  switch (action.type) {
    default: return state;
  }
}
