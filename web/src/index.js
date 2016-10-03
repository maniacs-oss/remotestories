/* @flow */

import 'sanitize.css/sanitize.css';
import './styles.css'; // NOTE order is of importance since we're overriding things from sanitize.css
import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
