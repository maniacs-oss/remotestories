/* @flow */

import type { ThunkAction } from 'src/types';
import { createOrFetchUser } from 'src/actions/user';
import { now, randomNumber } from 'src/utils';

export const CREATE = 'comments/CREATE';

export function createComment({ body, story_id }: { body: string, story_id: number }): ThunkAction {
  return (dispatch, getState) => {
    dispatch(createOrFetchUser());

    const { user } = getState();

    const comment = {
      id: randomNumber(1000),
      body,
      story_id,
      user_id: user.id,
      created_at: now(),
    };

    dispatch({ type: CREATE, comment, storyId: story_id });
  };
}
