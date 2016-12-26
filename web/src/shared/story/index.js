/* @flow */

import './styles.css';
import React from 'react';
import Time from 'src/shared/time';
import classNames from 'classnames';
import type { Dispatch, Reaction, Story as StoryType } from 'src/types';
import { Link } from 'react-router';
import { Text } from 'src/shared/typography';
import { connect } from 'react-redux';
import { findReactions } from 'src/selectors';
import { toggleReaction } from 'src/actions/reactions';

type Props = {
  className?: string,
  dispatch: Dispatch,
  story: StoryType,
  reactions: { [key: string]: Array<Reaction> },
  userReactionIds: Array<number>,
};

const REACTIONS = [
  { kind: 'laugh', icon: '😄' },
  { kind: 'cold_sweat', icon: '😰' },
];

class Story extends React.Component {
  props: Props;

  render() {
    const { className, story } = this.props;
    const path = `/stories/${ story.id }`;

    return (
      <div className={classNames('Story', className)}>
        <Text component="div" variant="light" className="Story-body">
          {story.body}
        </Text>

        <div className="Story-meta">
          <div>
            {REACTIONS.map(this.renderReactionButton)}
            {this.renderCommentsButton()}
          </div>

          <Link className="Story-meta-time" to={path}>
            <Time time={story.created_at} />
          </Link>
        </div>
      </div>
    );
  }

  renderReactionButton = ({ kind, icon }) => {
    const reactions = this.props.reactions[kind] || [];
    const reaction = reactions.find(({ id }) => this.props.userReactionIds.includes(id));
    const className = classNames('Story-meta-button', { 'is-active': !!reaction });

    return (
      <a className={className} onClick={this.toggleReaction(kind)} key={kind}>
        <span className="Story-meta-button-icon">{icon}</span>
        &nbsp;
        {reactions.length}
      </a>
    );
  }

  renderCommentsButton() {
    const { story } = this.props;
    const path = `/stories/${ story.id }`;

    return (
      <Link className="Story-meta-button" to={path}>
        {story.comment_ids.length}
        &nbsp;
        <span className="Story-meta-button-icon">💬</span>
      </Link>
    );
  }

  toggleReaction = (kind) => () => {
    const { dispatch, story } = this.props;
    dispatch(toggleReaction({ story, kind }));
  };
}

const mapStateToProps = (state, { story, user }) => {
  const reactions = findReactions(state, story.reaction_ids);
  const userReactionIds = state.user.reactionIds;

  return {
    reactions,
    userReactionIds,
  };
};

export default connect(mapStateToProps)(Story);
