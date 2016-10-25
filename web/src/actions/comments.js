/* @flow */

import type { Comment } from 'src/types';

export type CREATE_COMMENT_ACTION = {
  type: 'comments/CREATE',
  comment: Comment,
};

export const CREATE = 'comments/CREATE';

export function createComment({ comment: { body, story_id } }: { comment: { body: string, story_id: number } }): ?CREATE_COMMENT_ACTION {
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

function randomNumber(maximum: number): number {
  return Math.ceil(Math.random() * (maximum - 1) + 1);
}

function now(): string {
  const date = new Date();
  return date.toString();
}
