/* @flow */

import Layout from 'src/shared/layout';
import React from 'react';
import { Paragraph, Text } from 'src/shared/typography';

export default function About() {
  return (
    <Layout>
      <Text component="div" variant="light">
        <Paragraph>
          Anonymous stories from remote workers
        </Paragraph>

        <Paragraph>
          Remote Stories is a platform where remote workers of all kinds can anonymously post their experiences, thoughts, concerns, opinions and, of course, general ups/downs.
        </Paragraph>

        <Paragraph>
          You can react to others posts with:
        </Paragraph>

        <Paragraph component="ul">
          <li>😄 Agree/Haha me too</li>
          <li>😰 Shit that is scary/I’m worried about this too</li>
        </Paragraph>

        <Paragraph>
          Remote workers need to know they are not alone with their struggles. This platform lets you see what issues (good and bad) others are facing.
        </Paragraph>

        <Paragraph>
          Feel free to discuss your thoughts on posts and learn from other peoples' experiences. Find out the true ins and outs of a remote life.
        </Paragraph>

        <Paragraph>
          Remote working, especially in tech, has a very positive aura around it but often the bad sides of it are overlooked. This is a place to see both sides of the story.
        </Paragraph>
      </Text>
    </Layout>
  );
}
