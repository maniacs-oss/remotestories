/* @flow */

import './styles.css';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import React from 'react';
import Story from 'src/shared/story';
import type { Comment, Story as StoryType } from 'src/types';
import { connect } from 'react-redux';
import { pluck } from 'src/utils';

type Props = {
  story: ?StoryType,
  comments: Array<Comment>,
};

function StoryDetail({ story, comments }: Props) {
  if (!story) return null;

  return (
    <div className="StoryDetail">
      <Story className="StoryDetail-story" story={story} />
      <CommentList comments={comments} />
      <CommentForm />
    </div>
  );
}

const mapStateToProps = (state, { params: { id } }) => {
  const story = state.stories.get(Number(id));

  const comments = story
    ? pluck(state.comments, story.comment_ids)
    : [];

  return {
    story,
    comments,
  };
};

export default connect(mapStateToProps)(StoryDetail);
