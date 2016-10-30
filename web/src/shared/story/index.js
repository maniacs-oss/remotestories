/* @flow */

import './styles.css';
import React from 'react';
import Time from 'src/shared/time';
import classNames from 'classnames';
import type { Reaction, Story as StoryType } from 'src/types';
import { Link } from 'react-router';
import { Text } from 'src/shared/typography';
import { connect } from 'react-redux';

type Reactions = {
  [key: string]: Array<Reaction>,
};

type Props = {
  className?: string,
  story: StoryType,
  reactions: Reactions,
};

const REACTION_TYPES = ['laugh', 'cold_sweat'];

function Story({ className, reactions, story }: Props) {
  const path = `/stories/${ story.id }`;

  return (
    <div className={classNames('Story', className)}>
      <Text component="div" variant="light" className="Story-body">
        {story.body}
      </Text>

      <div className="Story-meta">
        <div>
          {REACTION_TYPES.map((type) =>
            <ReactionsButton reactions={reactions[type] || []} key={type} type={type} />
          )}
          <CommentsButton story={story} />
        </div>

        <Link className="Story-meta-time" to={path}>
          <Time time={story.created_at} />
        </Link>
      </div>
    </div>
  );
}

const REACTION_TYPE_EMOJI = {
  'cold_sweat': '😰',
  'laugh': '😄',
};

function ReactionsButton({ reactions, type }) {
  const emoji = REACTION_TYPE_EMOJI[type];

  return (
    <a className="Story-meta-button">
      <span className="Story-meta-button-emoji">{emoji}</span>&nbsp;{reactions.length}
    </a>
  );
}

function CommentsButton({ story }) {
  const path = `/stories/${ story.id }`;

  return (
    <Link className="Story-meta-button" to={path}>
      {story.comment_ids.length}&nbsp;<span className="Story-meta-button-emoji">💬</span>
    </Link>
  );
}

const mapStateToProps = (state, props) => {
  const reactions = state.reactions
    .filter(({ story_id }) => story_id === props.story.id)
    .groupBy(({ type }) => type)
    .toJS();

  return {
    reactions,
  };
};

export default connect(mapStateToProps)(Story);
