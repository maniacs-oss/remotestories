/* @flow */

import type { ThunkAction } from 'src/types';
import { createUser } from 'src/actions/user';
import { findStoryApi } from 'src/selectors';
import { pushHistory } from './history';

export const CREATE = 'stories/CREATE';
export const FETCH = 'stories/FETCH';
export const RECEIVE = 'stories/RECEIVE';

export function createStory({ body }: { body: string }): ThunkAction {
  return async (dispatch, getState, api) => {
    await dispatch(createUser());

    api.stories.create({ story: { body } }).then(({ body: story }) => {
      dispatch({ type: CREATE, story });
      dispatch(pushHistory({ path: `/stories/${ story.id }` }));
    });
  };
}

export function fetchStory({ id }: { id: number }): ThunkAction {
  return (dispatch, getState, api) => {
    const storyApi = findStoryApi(getState(), id);

    if (storyApi.isFetching || storyApi.isFetched) {
      return;
    }

    dispatch({ type: FETCH, id });

    api.stories.findOne({ id }).then(({ body }) => {
      const { comments, reactions, story } = body;
      dispatch({ type: RECEIVE, id, comments, reactions, story });
    });
  };
}
