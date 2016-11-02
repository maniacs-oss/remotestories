/* @flow */

import type { Action } from 'src/types';
import { CREATE as CREATE_COMMENT } from 'src/actions/comments';
import { CREATE as CREATE_REACTION, DESTROY as DESTROY_REACTION } from 'src/actions/reactions';
import { CREATE as CREATE_STORY } from 'src/actions/stories';
import { Map, Record } from 'immutable';
import { RECEIVE as RECEIVE_COLLECTION } from 'src/actions/collections';
import { RECEIVE as RECEIVE_STORY } from 'src/actions/stories';

export const State = Record({
  comments: new Map(),
  reactions: new Map(),
  stories: new Map(),
});

export default function reducer(state: State = new State(), action: Action): State {
  switch (action.type) {
    case CREATE_COMMENT:
      return state.withMutations((newState) =>
        newState
          .setIn(['comments', action.comment.id], action.comment)
          .updateIn(['stories', action.storyId], (story) => ({ ...story, comment_ids: [...story.comment_ids, action.comment.id] }))
      );
    case CREATE_REACTION:
      return state.withMutations((newState) =>
        newState
          .setIn(['reactions', action.reaction.id], action.reaction)
          .updateIn(['stories', action.storyId], (story) => ({ ...story, reaction_ids: [...story.reaction_ids, action.reaction.id] }))
      );
    case DESTROY_REACTION:
      return state
        .deleteIn(['reactions', action.reaction.id]);
    case CREATE_STORY:
      return state
        .setIn(['stories', action.story.id], action.story);
    case RECEIVE_STORY:
      return state.withMutations((newState) =>
        newState
          .setIn(['stories', action.story.id], action.story)
          .update('comments', (comments) =>
            comments
              .merge(toMap(action.comments))
          )
          .update('reactions', (reactions) =>
            reactions
              .merge(toMap(action.reactions))
          )
      );
    case RECEIVE_COLLECTION:
      return state.withMutations((newState) =>
        newState
          .update('stories', (stories) =>
            stories
              .merge(toMap(action.stories))
          )
          .update('reactions', (reactions) =>
            reactions
              .merge(toMap(action.reactions))
          )
      );

    default:
      return state;
  }
}

function toMap(entities) {
  return new Map(entities.map((entity) => [entity.id, entity]));
}

export function findComments(state: State, ids: Array<number>) {
  return state
    .get('comments')
    .filter(({ id }) => ids.includes(id))
    .toArray();
}

export function findStory(state: State, id: number | string) {
  return state.getIn(['stories', Number(id)])
}

export function findStories(state: State, ids: Array<number>) {
  return state
    .get('stories')
    .filter(({ id }) => ids.includes(id))
    .toArray();
}

export function findReactions(state: State, ids: Array<number>) {
  return state
    .get('reactions')
    .filter(({ id }) => ids.includes(id))
    .valueSeq()
    .groupBy(({ type }) => type)
    .toJS()
}
