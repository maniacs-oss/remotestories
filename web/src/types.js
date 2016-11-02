/* @flow */

import type { Dispatch as ReduxDispatch } from 'redux';
import type { State as CollectionsState } from 'src/reducers/api/collections';
import type { State as EntitiesState } from 'src/reducers/entities';
import type { State as HistoryState } from 'src/reducers/history';
import type { State as StoriesState } from 'src/reducers/api/stories';
import type { State as UserState } from 'src/reducers/user';

export type Story = {
  id: number,
  body: string,
  comment_ids: Array<number>,
  reaction_ids: Array<number>,
  created_at: string,
};

export type Reaction = {
  id: number,
  type: 'laugh' | 'cold_sweat',
};

export type Comment = {
  id: number,
  body: string,
  user_id: number,
  created_at: string,
};

export type Location = {
  query?: { page?: string },
}

export type State = {
  api: {
    collections: CollectionsState,
    stories: StoriesState,
  },
  entities: EntitiesState,
  history: HistoryState,
  user: UserState,
};

type GetState = () => State;
export type Action = Object;
export type ThunkAction = (dispatch: (Action) => any, getState: GetState) => any;
export type Dispatch = (Action | ThunkAction) => any;
