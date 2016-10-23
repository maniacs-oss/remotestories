/* @flow */

import './styles.css';
import React from 'react';
import { Link } from 'react-router';
import logo from './assets/logo.svg';
import illustration from './assets/illustration.jpg';

export default function NotFound() {
  return (
    <div className="NotFound">
      <Link className="NotFound-logo" to="/">
        <img src={logo} alt="Remote Stories" />
      </Link>

      <p className="NotFound-text">
        Oops, we can’t seem to find the page you are looking for…
      </p>

      <Link className="NotFound-link" to="/">
        Go back to our homepage
      </Link>

      <img className="NotFound-illustration" src={illustration} alt="" />
    </div>
  );
}
