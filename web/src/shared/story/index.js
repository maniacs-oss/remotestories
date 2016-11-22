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
};

const REACTION_TYPES = [
  { type: 'laugh', icon: '😄' },
  { type: 'cold_sweat', icon: '😰' },
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
            {REACTION_TYPES.map(
              this.renderReactionButton
            )}
            {this.renderCommentsButton()}
          </div>

          <Link className="Story-meta-time" to={path}>
            <Time time={story.created_at} />
          </Link>
        </div>
      </div>
    );
  }

  renderReactionButton = ({ type, icon }) => {
    const reactions = this.props.reactions[type] || [];

    return (
      <a className="Story-meta-button" onClick={this.toggleReaction(type)} key={type}>
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

  toggleReaction = (type) => (
    () => {
      const { dispatch, story } = this.props;
      dispatch(toggleReaction({ story, type }));
    }
  );
}

const mapStateToProps = (state, { story }) => {
  const reactions = findReactions(state, story.reaction_ids);

  return {
    reactions,
  };
};

export default connect(mapStateToProps)(Story);
