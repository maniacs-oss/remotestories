/* @flow */

import './styles.css';
import Form, { Label, SubmitButton, Textarea } from 'src/shared/form';
import Layout from 'src/shared/layout';
import React from 'react';
import type { Dispatch } from 'src/types';
import { Link } from 'react-router';
import { Text } from 'src/shared/typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStory } from 'src/actions/stories';

const TOS = <span>By submitting your story, you accept the <Link to="/terms">terms&nbsp;of&nbsp;use</Link>.</span>

class StoryForm extends React.Component {
  form: Form;

  render() {
    return (
      <Layout className="StoryForm">
        <Text component="h1" className="StoryForm-heading" variant="light">
          Submit your Story. It’s anonymous.
        </Text>

        <Form className="StoryForm-form" onSubmit={this.props.createStory} ref={form => this.form = form}>
          <Label htmlFor="body">
            Your story
          </Label>

          <Textarea
            id="body"
            name="body"
            className="StoryForm-textarea"
            onKeyDown={this.submitOnCmdEnter} />

          <SubmitButton text={TOS}>
            Post
          </SubmitButton>
        </Form>

        <h2 className="StoryForm-heading">
          Tips about posting your story
        </h2>

        <p className="StoryForm-tip">
          Do not share names, location or information that could help… Pease Ben Kenobi, I need your help to write super good tips about posting a story.
        </p>
        <p className="StoryForm-tip">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut massa in dolor pulvinar efficitur. Phasellus lacinia, quam et hendrerit elementum, metus sem convallis augue, ac euismod turpis sapien a arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </Layout>
    );
  }

  submitOnCmdEnter = (event: SyntheticKeyboardEvent) => {
    if (!(event.metaKey && event.key === 'Enter')) return;

    if (event.target instanceof window.HTMLTextAreaElement) {
      this.form.submit();
    }
  };
}

/**
 * NOTE passing an object to `bindActionCreators` messes with Flow:
 *
 * ```
 * const mapDispatchToProps = (dispatch: Dispatch) =>
 *   bindActionCreators({ createStory }, dispatch);
 * ```
 */

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createStory: bindActionCreators(createStory, dispatch)
});

export default connect(null, mapDispatchToProps)(StoryForm);
