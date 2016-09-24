/* @flow */

import './styles.css';
import React from 'react';
import type { Story as StoryType } from 'src/types';
import { Link } from 'react-router';

type Props = {
  story: StoryType,
};

export default function Story({ story }: Props) {
  const storyPath = `/stories/${ story.id }`;

  return (
    <div className="Story">
      <div className="Story-body">
        {story.body}
      </div>

      <div className="Story-meta">
        <div>
          <a className="Story-meta-button" href="#"><span className="Story-meta-button-emoji">😄</span>&nbsp;{random(100)}</a>
          <a className="Story-meta-button" href="#"><span className="Story-meta-button-emoji">😰</span>&nbsp;{random(50)}</a>

          <Link className="Story-meta-button" to={storyPath}>
            {random(15)}&nbsp;<span className="Story-meta-button-emoji">💬</span>
          </Link>
        </div>

        <Link className="Story-meta-time" to={storyPath}>
          <time>09.16.16 8:31am →</time>
        </Link>
      </div>
    </div>
  );
}

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}
