/* @flow */

import './styles.css';
import React from 'react';

const STORIES = [
  {
    body: 'I have all the reasons to not work here, (spaghetti all over the code base, ignorant coworkers, shitty management) but instead of resigning I’m going to ask for more salary, take the project responsibility and refactor the hell out of it. If they agreed, I think that’s a win for both sides.',
  },
  {
    body: 'I’ve been freelancing since I was 12. Anyone can learn a bit of code and make a lot of money for it.',
  },
  {
    body: 'I feel guilty that I don’t want to spend my free time working on side projects, when it seems that everyone else does. I worry that means I’m in the wrong profession.',
  },
  {
    body: 'The guy who hired me left. Im the solo technical person who understand all aspects of my company’s platform. Requested shift to another role as i felt frustrated doing my current profile. Company outsources said role to India and tells me im too valuable to shift.',
  },
];

export default function Stories() {
  return (
    <ol className="Stories">
      {STORIES.map((story, index) =>
        <li className="Stories-item" key={index}>
          <Story story={story} />
        </li>
      )}
    </ol>
  );
}

function Story({ story }) {
  return (
    <div className="Stories-Story">
      <div className="Stories-Story-body">
        {story.body}
      </div>

      <div className="Stories-Story-meta">
        <div>
          <a className="Stories-Story-meta-button" href="#"><span className="Stories-Story-meta-button-emoji">😄</span>&nbsp;{random(100)}</a>
          <a className="Stories-Story-meta-button" href="#"><span className="Stories-Story-meta-button-emoji">😰</span>&nbsp;{random(50)}</a>
          <a className="Stories-Story-meta-button" href="#">{random(15)}&nbsp;<span className="Stories-Story-meta-button-emoji">💬</span></a>
        </div>

        <a className="Stories-Story-meta-time" href="#">
          <time>09.16.16 8:31am →</time>
        </a>
      </div>
    </div>
  );
}

function random(max) {
  return Math.floor(Math.random() * (max + 1));
}
