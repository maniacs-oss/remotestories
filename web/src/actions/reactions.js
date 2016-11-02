/* @flow */

import type { Action, Story, ThunkAction } from 'src/types';
import { createOrFetchUser } from 'src/actions/user';
import { randomNumber } from 'src/utils';
import { findReactions } from 'src/reducers/entities';

export const CREATE = 'reactions/CREATE';
export const DESTROY = 'reactions/DESTROY';

export function toggleReaction({ story, type }: { story: Story, type: string }): ThunkAction {
  return (dispatch, getState) => {
    dispatch(createOrFetchUser());

    const { entities, user } = getState();

    const reactionsByType = findReactions(entities, story.reaction_ids);
    const reactions = reactionsByType[type] || [];
    const reaction = reactions.find(({ id }) => user.reactionIds.includes(id));

    if (reaction) {
      dispatch(destroyReaction(reaction));
      return;
    }

    dispatch(createReaction({ story, type }));
  };
}

function createReaction({ story, type }): Action {
  const reaction = {
    id: randomNumber(1000),
    type,
  };

  return { type: CREATE, reaction, storyId: story.id };
}

function destroyReaction(reaction): Action {
  return { type: DESTROY, reaction };
}
