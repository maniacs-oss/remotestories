/* @flow */

import type { Comment } from 'src/types';
import type { Story } from 'src/types';
import { Map } from 'immutable';

type State = Map<number, Story>;
type Action = Object;

const STORIES = [
  {
    id: 1,
    body: 'The guy who hired me left. Im the solo technical person who understand all aspects of my company’s platform. Requested shift to another role as i felt frustrated doing my current profile. Company outsources said role to India and tells me im too valuable to shift.',
    comment_ids: [],
    created_at: '2016-10-08T10:11:43.088Z',
  },
  {
    id: 2,
    body: 'I feel guilty that I don’t want to spend my free time working on side projects, when it seems that everyone else does. I worry that means I’m in the wrong profession.',
    comment_ids: [],
    created_at: '2016-10-08T10:11:43.088Z',
  },
  {
    id: 3,
    body: 'I’ve been freelancing since I was 12. Anyone can learn a bit of code and make a lot of money for it.',
    comment_ids: [],
    created_at: '2016-10-08T10:11:43.088Z',
  },
  {
    id: 4,
    body: 'I have all the reasons to not work here, (spaghetti all over the code base, ignorant coworkers, shitty management) but instead of resigning I’m going to ask for more salary, take the project responsibility and refactor the hell out of it. If they agreed, I think that’s a win for both sides.',
    comment_ids: [1, 2],
    created_at: '2016-10-08T10:11:43.088Z',
  },
];

const INITIAL_STATE = STORIES.reduce(
  (state, story) => state.set(story.id, story),
  new Map(),
);

export default function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
