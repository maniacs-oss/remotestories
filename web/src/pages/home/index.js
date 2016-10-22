/* @flow */

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
    <div>
      <StoryList />
      <Pagination page={page} totalPages={5} />
    </div>
  );
}
