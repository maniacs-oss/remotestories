/* @flow */

import './styles.css';
import Form, { Label, SubmitButton, Textarea } from 'src/shared/form';
import React from 'react';
import type { Dispatch, Story } from 'src/types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createComment } from 'src/actions/comments';

type Props = {
  dispatch: Dispatch,
  story: Story,
};

const TOS = <span>By submitting your comment, you accept the <Link to="/terms">terms&nbsp;of&nbsp;use</Link>.</span>;

class CommentForm extends React.Component {
  props: Props;

  form: Form;

  render() {
    return (
      <Form onSubmit={this.createComment} ref={form => this.form = form}>
        <Label htmlFor="body">Post your comment</Label>

        <Textarea
          id="body"
          name="body"
          className="CommentForm-textarea"
          onKeyDown={this.submitOnCmdEnter} />

        <SubmitButton text={TOS}>
          Post
        </SubmitButton>
      </Form>
    );
  }

  createComment = ({ body }) => {
    if (body) {
      const comment = { body, story_id: this.props.story.id };
      this.props.dispatch(createComment(comment));
    }

    this.form.reset();
  };

  submitOnCmdEnter = (event: SyntheticKeyboardEvent) => {
    if (!(event.metaKey && event.key === 'Enter')) return;

    if (event.target instanceof window.HTMLTextAreaElement) {
      this.form.submit();
    }
  };
}

export default connect()(CommentForm);
