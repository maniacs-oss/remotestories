/* @flow */

import './styles.css';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import React from 'react';
import Story from 'src/shared/story';
import { COMMENTS, STORIES } from 'src/constants';

type Props = {
  params: { id: string },
};

export default function StoryDetail({ params: { id } }: Props) {
  const story = findStory(id);

  if (!story) return null;

  const comments = findComments(story.id);

  return (
    <div className="StoryDetail">
      <Story className="StoryDetail-story" story={story} />
      <CommentList comments={comments} />
      <CommentForm />
    </div>
  );
}

function findStory(id: string) {
  return STORIES.find((story) => String(story.id) === id);
}

function findComments(id: number) {
  return COMMENTS.filter(({ story_id }) => story_id === id);
}
