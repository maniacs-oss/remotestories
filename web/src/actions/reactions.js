/* @flow */

import type { Story, ThunkAction } from 'src/types';
import { createUser } from 'src/actions/user';
import { findReactions } from 'src/selectors';

export const CREATE = 'reactions/CREATE';
export const DESTROY = 'reactions/DESTROY';

export function toggleReaction({ story, kind }: { story: Story, kind: string }): ThunkAction {
  return async (dispatch, getState, api) => {
    await dispatch(createUser());

    const state = getState();
    const reactionsByKind = findReactions(state, story.reaction_ids);
    const reactions = reactionsByKind[kind] || [];
    const reaction = reactions.find(({ id }) => state.user.reactionIds.includes(id));

    if (reaction) {
      api.stories.reactions.delete({ id: reaction.id, storyId: story.id }).then(() => {
        dispatch({ type: DESTROY, reaction });
      });

      return;
    }

    api.stories.reactions.create({ reaction: { kind }, storyId: story.id }).then(({ body: reaction }) => {
      dispatch({ type: CREATE, reaction, storyId: story.id });
    });
  };
}
