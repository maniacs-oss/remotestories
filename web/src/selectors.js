/* @flow */

import type { State } from 'src/types';
import { CollectionApiState } from 'src/reducers/api/collections';
import { StoryApiState } from 'src/reducers/api/stories';

export function findCollectionApi(state: State, name: string) {
  const collection = state.api.collections.get(name);
  return collection|| new CollectionApiState();
}

export function findStoryApi(state: State, id: number | string) {
  const story = state.api.stories.get(Number(id));
  return story|| new StoryApiState();
}

export function findComments(state: State, ids: Array<number>) {
  const comments = state.entities.get('comments');
  return pluck(comments, ids);
}

export function findStory(state: State, id: number | string) {
  return state.entities
    .getIn(['stories', Number(id)]);
}

export function findStories(state: State, ids: Array<number>) {
  const stories = state.entities.get('stories');
  return pluck(stories, ids);
}

export function findReactions(state: State, ids: Array<number>) {
  return state.entities
    .get('reactions')
    .filter(({ id }) => ids.includes(id))
    .valueSeq()
    .groupBy(({ kind }) => kind)
    .toJS()
}

function pluck(iterable, keys) {
  const results = [];

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];

    if (iterable.has(key)) {
      results.push(iterable.get(key));
    }
  }

  return results;
}
