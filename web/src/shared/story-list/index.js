/* @flow */

import './styles.css';
import React from 'react';
import Story from 'src/shared/story'
import { connect } from 'react-redux';
import type { Story as StoryType } from 'src/types';

type Props = {
  stories: Array<StoryType>,
};

function StoryList({ stories }: Props) {
  return (
    <ol className="StoryList">
      {stories.map((story) =>
        <li key={story.id}>
          <Story story={story} />
        </li>
      )}
    </ol>
  );
}

const mapStateToProps = ({ stories }) => {
  return {
    stories: stories.valueSeq(),
  };
};

export default connect(mapStateToProps)(StoryList);
