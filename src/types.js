/* @flow */

export type Story = {
  id: number,
  body: string,
};

export type Comment = {
  id: number,
  body: string,
  story_id: number,
  user_uuid: string,
};
