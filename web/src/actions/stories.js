/* @flow */

import type { ThunkAction } from 'src/types';
import { COMMENTS, REACTIONS, STORIES } from 'src/constants';
import { createOrFetchUser } from 'src/actions/user';
import { findStoryApi } from 'src/selectors';
import { now, randomNumber } from 'src/utils';
import { pushHistory } from './history';

export const CREATE = 'stories/CREATE';
export const FETCH = 'stories/FETCH';
export const RECEIVE = 'stories/RECEIVE';

const COMMENTS_BY_STORY = {
  '1': [COMMENTS[0], COMMENTS[1]],
  '2': [],
  '3': [],
  '4': [],
};

const REACTIONS_BY_STORY = {
  '1': [REACTIONS[0]],
  '2': [REACTIONS[1]],
  '3': [],
  '4': [],
};

export function createStory({ body }: { body: string }): ThunkAction {
  return (dispatch, getState) => {
    dispatch(createOrFetchUser());

    const { user } = getState();

    const story = {
      id: randomNumber(1000),
      body,
      comment_ids: [],
      reaction_ids: [],
      user_id: user.id,
      created_at: now(),
    };

    dispatch({ type: CREATE, story });
    dispatch(pushHistory({ path: `/stories/${ story.id }` }));
  };
}

export function fetchStory({ id }: { id: number }): ThunkAction {
  return (dispatch, getState) => {
    const storyApi = findStoryApi(getState(), id);
    if (storyApi.isFetching || storyApi.isFetched) return;

    dispatch({ type: FETCH, id });

    // do async stuff here
    // ...
    // end

    const story = STORIES[id - 1];
    if (!story) return;
    const comments = COMMENTS_BY_STORY[String(story.id)];
    const reactions = REACTIONS_BY_STORY[String(story.id)];

    dispatch({ type: RECEIVE, id, comments, reactions, story });
  };
}
