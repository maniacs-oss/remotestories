/* @flow */

import type { Comment } from 'src/types';
import { now, randomNumber } from 'src/utils';

export type CREATE_COMMENT_ACTION = {
  type: 'comments/CREATE',
  comment: Comment,
};

export const CREATE = 'comments/CREATE';

export function createComment({ body, story_id }: { body: string, story_id: number }): ?CREATE_COMMENT_ACTION {
  if (body === '') return;

  const comment = {
    id: randomNumber(1000),
    body,
    story_id,
    user_id: 1337,
    created_at: now(),
  };

  return { type: CREATE, comment };
}
