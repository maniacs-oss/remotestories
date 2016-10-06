/* @flow */

import './styles.css';
import React from 'react';
import Form, { Label, SubmitButton, Textarea } from 'src/shared/form';

const TOS = <span>By submitting your comment, you accept the <a href="#">terms&nbsp;of&nbsp;use</a>.</span>;

export default function CommentForm() {
  return (
    <Form>
      <Label htmlFor="body">Post your comment</Label>
      <Textarea className="CommentForm-textarea" id="body" />

      <SubmitButton text={TOS}>
        Post
      </SubmitButton>
    </Form>
  );
}
