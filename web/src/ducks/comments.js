/* @flow */

import type { Comment } from 'src/types';

type State = {
  [key: string]: Comment,
};

type Action = {
  type?: any,
};

const INITIAL_STATE = {
  '1': {
    id: 1,
    body: 'Man.. I am sorry you had to burn a persy day just to avoid the office..',
    story_id: 1,
    user_id: 1,
    created_at: '2016-10-08T10:10:39.032Z',
  },
  '2': {
    id: 2,
    body: 'What?',
    story_id: 1,
    user_id: 2,
    created_at: '2016-10-08T10:11:43.088Z',
  },
};

export default function reducer(state: State = INITIAL_STATE, action: Action = {}) {
  switch (action.type) {
    default: return state;
  }
}
