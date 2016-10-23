/* @flow */

import './styles.css';
import Form, { Label, SubmitButton, Textarea } from 'src/shared/form';
import React from 'react';
import type { Dispatch, Story } from 'src/types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createComment } from 'src/actions/comments';

type Props = {
  createComment: typeof createComment,
  story: Story,
};

const TOS = <span>By submitting your comment, you accept the <a href="#">terms&nbsp;of&nbsp;use</a>.</span>;

class CommentForm extends React.Component {
  props: Props;

  textarea: Textarea;

  render() {
    return (
      <Form onSubmit={this.createComment}>
        <Label htmlFor="body">Post your comment</Label>

        <Textarea
          id="body"
          name="body"
          className="CommentForm-textarea"
          onKeyDown={this.submitOnCmdEnter}
          ref={textarea => this.textarea = textarea} />

        <SubmitButton text={TOS}>
          Post
        </SubmitButton>
      </Form>
    );
  }

  createComment = ({ body }) => {
    const comment = { body, story_id: this.props.story.id };
    this.props.createComment({ comment });
    this.textarea.el.value = '';
  };

  submitOnCmdEnter = (event: SyntheticKeyboardEvent) => {
    if (!(event.metaKey && event.key === 'Enter')) return;

    if (event.target instanceof window.HTMLTextAreaElement) {
      this.createComment({ body: event.target.value.trim() });
    }
  };
}

/**
 * NOTE passing an object to `bindActionCreators` messes with Flow:
 *
 * ```
 * const mapDispatchToProps = (dispatch: Dispatch) =>
 *   bindActionCreators({ createComment }, dispatch);
 * ```
 */

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createComment: bindActionCreators(createComment, dispatch)
});

export default connect(null, mapDispatchToProps)(CommentForm);
