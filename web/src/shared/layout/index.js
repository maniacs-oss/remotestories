/* @flow */

import './styles.css';
import React from 'react';
import illustration1 from './assets/illustration-1.jpg';
import illustration2 from './assets/illustration-2.jpg';
import logo from './assets/logo.svg';
import { Link } from 'react-router';

type Props = {
  children?: any,
};

export default function Layout({ children }: Props) {
  const illustrationOfTheDay = new Date().getDay() % 2 === 0
    ? illustration1
    : illustration2;

  return (
    <div className="Layout">
      <div className="Layout-illustration">
        <img className="Layout-illustration-image" src={illustrationOfTheDay} alt="" />
      </div>

      <div className="Layout-container">
        <div className="Layout-content">
          <nav className="Layout-navigation">
            <Link className="Layout-navigation-logo" to="/">
              <img src={logo} alt="Remote Stories" />
            </Link>

            <ul className="Layout-navigation-list">
              <li>
                <Link activeClassName="Layout-navigation-link-active" className="Layout-navigation-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link activeClassName="Layout-navigation-link-active" className="Layout-navigation-link" to="/new">
                  New
                </Link>
              </li>
              <li>
                <Link activeClassName="Layout-navigation-link-active" className="Layout-navigation-link" to="/popular">
                  Popular
                </Link>
              </li>
              <li>
                <Link activeClassName="Layout-navigation-link-active" className="Layout-navigation-link" to="/submit">
                  Submit
                </Link>
              </li>
            </ul>
          </nav>

          {children}
        </div>
      </div>
    </div>
  );
}
