/* @flow */

import React from 'react';
import Story from 'src/shared/story';
import { STORIES } from 'src/constants';

type Props = {
  params: { id: string },
};

export default function StoryDetail({ params: { id } }: Props) {
  const story = findStory(id);

  if (!story) return null;
  return <Story story={story} />;
}

function findStory(id: string) {
  return STORIES.find((story) => String(story.id) === id);
}
