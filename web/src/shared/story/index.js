/* @flow */

import './styles.css';
import React from 'react';
import Time from 'src/shared/time';
import classNames from 'classnames';
import type { Story as StoryType } from 'src/types';
import { Link } from 'react-router';

type Props = {
  className?: string,
  story: StoryType,
};

export default function Story({ className, story }: Props) {
  const storyPath = `/stories/${ story.id }`;

  return (
    <div className={classNames('Story', className)}>
      <div className="Story-body">
        {story.body}
      </div>

      <div className="Story-meta">
        <div>
          <a className="Story-meta-button" href="#"><span className="Story-meta-button-emoji">😄</span>&nbsp;{random(100)}</a>
          <a className="Story-meta-button" href="#"><span className="Story-meta-button-emoji">😰</span>&nbsp;{random(50)}</a>

          <Link className="Story-meta-button" to={storyPath}>
            {story.comments_count}&nbsp;<span className="Story-meta-button-emoji">💬</span>
          </Link>
        </div>

        <Link className="Story-meta-time" to={storyPath}>
          <Time time={story.created_at} />
        </Link>
      </div>
    </div>
  );
}

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}
