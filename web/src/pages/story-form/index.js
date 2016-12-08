/* @flow */

import './styles.css';
import Form, { Label, SubmitButton, Textarea } from 'src/shared/form';
import Layout from 'src/shared/layout';
import React from 'react';
import type { Dispatch } from 'src/types';
import { Link } from 'react-router';
import { Text } from 'src/shared/typography';
import { connect } from 'react-redux';
import { createStory } from 'src/actions/stories';

type Props = {
  dispatch: Dispatch,
};

const TOS = <span>By submitting your story, you accept the <Link to="/terms">terms&nbsp;of&nbsp;use</Link>.</span>

class StoryForm extends React.Component {
  props: Props;

  form: Form;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <Layout className="StoryForm">
        <Text component="h1" className="StoryForm-heading" variant="light">
          Submit your Story. It’s anonymous.
        </Text>

        <Form className="StoryForm-form" focus={true} onSubmit={this.createStory} ref={form => this.form = form}>
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

        <Text component="h2" className="StoryForm-heading" variant="light">
          Tips about posting your story
        </Text>

        <ul className="StoryForm-tips">
          <li>Don’t be rude in stories or comments.  This is not a place to debate or disagree, this is a place for simply sharing your experiences.</li>
          <li>It doesn’t need to be a lengthy story, short ones work well too!</li>
          <li>If the thread is interesting, post something thoughtful.</li>
          <li>Don’t post the same story multiple times - if it was boring initially, it likely will be next time too.</li>
          <li>Simple responses like ‘cool’ and ‘me too’ are fine but we added emoji reactions to serve that purpose.</li>
          <li>Have fun with it!</li>
        </ul>
      </Layout>
    );
  }

  createStory = async (story) => {
    if (!story.body) {
      this.form.reset();
      return;
    }

    const { id } = await this.props.dispatch(createStory(story));
    this.context.router.transitionTo(`/stories/${ id }`);
  }

  submitOnCmdEnter = (event: SyntheticKeyboardEvent) => {
    if (!(event.metaKey && event.key === 'Enter')) return;

    if (event.target instanceof window.HTMLTextAreaElement) {
      this.form.submit();
    }
  };
}

export default connect()(StoryForm);
