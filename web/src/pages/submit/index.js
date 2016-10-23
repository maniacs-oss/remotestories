/* @flow */

import './styles.css';
import Form, { Label, SubmitButton, Textarea } from 'src/shared/form';
import Layout from 'src/shared/layout';
import React from 'react';

const TOS = <span>By submitting your story, you accept the <a href="#">terms&nbsp;of&nbsp;use</a>.</span>

export default function Submit() {
  return (
    <Layout className="Submit">
      <h1 className="Submit-heading">
        Submit your Story. It’s anonymous.
      </h1>

      <Form className="Submit-form">
        <Label htmlFor="body">
          Your story
        </Label>

        <Textarea className="Submit-form-textarea" id="body" />

        <SubmitButton text={TOS}>
          Post
        </SubmitButton>
      </Form>

      <h2 className="Submit-heading">
        Tips about posting your story
      </h2>

      <p className="Submit-tip">
        Do not share names, location or information that could help… Pease Ben Kenobi, I need your help to write super good tips about posting a story.
      </p>
      <p className="Submit-tip">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut massa in dolor pulvinar efficitur. Phasellus lacinia, quam et hendrerit elementum, metus sem convallis augue, ac euismod turpis sapien a arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </Layout>
  );
}
