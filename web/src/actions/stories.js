/* @flow */

import type { Dispatch, Story } from 'src/types';
import { now, randomNumber } from 'src/utils';
import { pushHistory } from './history';

export type CREATE_STORY_ACTION = {
  type: 'stories/CREATE',
  story: Story,
};

export const CREATE = 'stories/CREATE';

export function createStory({ body }: { body: string }) {
  return (dispatch: Dispatch, getState: () => Object): ?CREATE_STORY_ACTION => {
    if (body === '') return;

    const story = {
      id: randomNumber(1000),
      body,
      comment_ids: [],
      created_at: now(),
    };

    dispatch({ type: CREATE, story });
    dispatch(pushHistory({ path: `/stories/${ story.id }` }));
  };
}
