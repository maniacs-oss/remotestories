/* @flow */

import type { ThunkAction } from 'src/types';
import { createUser } from 'src/actions/user';

export const CREATE = 'comments/CREATE';

export function createComment({ body, story_id }: { body: string, story_id: number }): ThunkAction {
  return async (dispatch, getState, api) => {
    await dispatch(createUser());

    api.stories.comments.create({ comment: { body }, storyId: story_id }).then(({ body: comment }) => {
      dispatch({ type: CREATE, comment, storyId: story_id });
    });
  };
}
