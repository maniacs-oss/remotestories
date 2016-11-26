/* @flow */

import './styles.css';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import Layout from 'src/shared/layout';
import NotFound from 'src/pages/not-found';
import React from 'react';
import Story from 'src/shared/story';
import type { Comment, Dispatch, Story as StoryType } from 'src/types';
import { connect } from 'react-redux';
import { fetchStory } from 'src/actions/stories';
import { findComments, findStory } from 'src/selectors';

type Props = {
  comments: Array<Comment>,
  dispatch: Dispatch,
  params: { id: string },
  story: ?StoryType,
};

class StoryDetail extends React.Component {
  props: Props;

  componentDidMount() {
    const id = Number(this.props.params.id);
    this.props.dispatch(fetchStory({ id }));
  }

  render() {
    const { comments, story } = this.props;

    if (!story) return <NotFound />;

    return (
      <Layout className="StoryDetail">
        <Story className="StoryDetail-story" story={story} />
        <CommentList comments={comments} />
        <CommentForm story={story} />
      </Layout>
    );
  }
}

const mapStateToProps = (state, { params: { id } }) => {
  const story = findStory(state, id);

  const comments = story
    ? findComments(state, story.comment_ids)
    : [];

  return {
    story,
    comments,
  };
};

export default connect(mapStateToProps)(StoryDetail);
