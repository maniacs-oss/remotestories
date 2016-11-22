/* @flow */

import './styles.css';
import Layout from 'src/shared/layout';
import Pagination from 'src/shared/pagination';
import React from 'react';
import Story from 'src/shared/story'
import type { Dispatch, Location, Story as StoryType } from 'src/types';
import { connect } from 'react-redux';
import { fetchCollection } from 'src/actions/collections';
import { findCollectionApi } from 'src/selectors';
import { findStories } from 'src/selectors';
import { pageParam } from 'src/utils';

type Props = {
  dispatch: Dispatch,
  location: Location,
  page: number,
  pattern: string,
  stories: Array<StoryType>,
  totalPages: number,
}

class StoryList extends React.Component {
  props: Props;

  componentDidMount() {
    this.fetchCollection();
  }

  componentDidUpdate() {
    this.fetchCollection();
  }

  fetchCollection = () => {
    const { dispatch, location , pattern } = this.props;
    const page = pageParam(location);

    dispatch(fetchCollection({ name: pattern, page }));
  };

  render() {
    const { page, totalPages, stories } = this.props;

    return (
      <Layout>
        <ol className="StoryList">
          {stories.map((story) =>
            <li key={story.id}>
              <Story story={story} />
            </li>
          )}
        </ol>

        <Pagination page={page} totalPages={totalPages} />
      </Layout>
    );
  }
}

const mapStateToProps = (state, { pattern }) => {
  const { isFetching, page, totalPages, storyIds } = findCollectionApi(state, pattern);
  const stories = findStories(state, storyIds);

  return {
    isFetching,
    page,
    totalPages,
    stories,
  };
};

export default connect(mapStateToProps)(StoryList);
