/* @flow */

import './styles.css';
import Box from 'src/shared/box';
import React from 'react';

const LABEL = <label htmlFor="body">Your story</label>;

export default function Submit() {
  return (
    <div className="Submit">
      <h1 className="Submit-heading">
        Submit your Story. It’s anonymous.
      </h1>

      <form className="Submit-form">
        <Box title={LABEL}>
          <textarea className="Submit-form-textarea" id="body" />

          <div className="Submit-form-action">
            <p className="Submit-form-tos">By submitting your story, you accept the <a href="#">terms&nbsp;of&nbsp;use.</a></p>
            <button className="Submit-form-button">post</button>
          </div>
        </Box>
      </form>

      <h2 className="Submit-heading">
        Tips about posting your story
      </h2>

      <p className="Submit-tip">
        Do not share names, location or information that could help… Pease Ben Kenobi, I need your help to write super good tips about posting a story.
      </p>
      <p className="Submit-tip">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut massa in dolor pulvinar efficitur. Phasellus lacinia, quam et hendrerit elementum, metus sem convallis augue, ac euismod turpis sapien a arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  );
}
