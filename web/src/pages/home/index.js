/* @flow */

import Layout from 'src/shared/layout';
import Pagination from 'src/shared/pagination';
import React from 'react';
import StoryList from 'src/shared/story-list';
import { pageParam } from 'src/utils';

type Props = {
  location: Object,
}

export default function Home({ location }: Props) {
  const page = pageParam(location);

  return (
    <Layout>
      <StoryList />
      <Pagination page={page} totalPages={5} />
    </Layout>
  );
}
