/* @flow */

import Layout from 'src/shared/layout';
import React from 'react';
import { Headline } from 'src/shared/typography';

const CONTENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et leo nec tellus molestie elementum. Nulla facilisi. Mauris ligula ipsum, suscipit nec vestibulum at, posuere in nulla. Vivamus suscipit odio at leo maximus, sed posuere mi ullamcorper. Nulla facilisi. Ut pretium nibh tellus, nec dapibus nisi feugiat vel. Nam at erat faucibus, porta neque iaculis, interdum elit. In in interdum nisi, sed pellentesque magna.';

export default function About() {
  return (
    <Layout>
      <Headline component="p">{CONTENT}</Headline>
    </Layout>
  );
}
