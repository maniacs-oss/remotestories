/* @flow */

import './styles.css';
import React from 'react';
import Story from 'src/shared/story'
import { STORIES } from 'src/constants';

export default function StoryList() {
  return (
    <ol className="StoryList">
      {STORIES.map((story) =>
        <li key={story.id}>
          <Story story={story} />
        </li>
      )}
    </ol>
  );
}
