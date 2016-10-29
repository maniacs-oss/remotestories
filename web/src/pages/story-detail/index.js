/* @flow */

import './styles.css';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import Layout from 'src/shared/layout';
import NotFound from 'src/pages/not-found';
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
  if (!story) return <NotFound />;

  return (
    <Layout className="StoryDetail">
      <Story className="StoryDetail-story" story={story} />
      <CommentList comments={comments} />
      <CommentForm story={story} />
    </Layout>
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
