/* @flow */

import './styles.css';
import About from '../pages/about';
import New from '../pages/new';
import Popular from '../pages/popular';
import React from 'react';
import Stories from '../pages/stories';
import Submit from '../pages/submit';
import illustration1 from './illustration-1.jpg';
import illustration2 from './illustration-2.jpg';
import logo from './logo.svg';
import { BrowserRouter, Match, Link } from 'react-router'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-illustration">
          <img className="App-illustration-image" src={illustrationOfTheDay()} alt="" />
        </div>

        <div className="App-container">
          <div className="App-content">
            <nav className="App-content-navigation">
              <Link className="App-content-navigation-logo" to="/">
                <img src={logo} alt="Remote Stories" />
              </Link>

              <ul className="App-content-navigation-list">
                <li>
                  <Link activeClassName="App-content-navigation-list-link-active" className="App-content-navigation-list-link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link activeClassName="App-content-navigation-list-link-active" className="App-content-navigation-list-link" to="/new">
                    New
                  </Link>
                </li>
                <li>
                  <Link activeClassName="App-content-navigation-list-link-active" className="App-content-navigation-list-link" to="/popular">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link activeClassName="App-content-navigation-list-link-active" className="App-content-navigation-list-link" to="/submit">
                    Submit
                  </Link>
                </li>
              </ul>
            </nav>

            <Match exactly pattern="/" component={Stories} />
            <Match pattern="/about" component={About} />
            <Match pattern="/new" component={New} />
            <Match pattern="/popular" component={Popular} />
            <Match pattern="/submit" component={Submit} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

function illustrationOfTheDay() {
  return !(new Date().getDay() % 2) ? illustration1 : illustration2;
}
