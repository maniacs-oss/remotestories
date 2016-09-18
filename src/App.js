/* @flow */

import './App.css';
import React, { Component } from 'react';
import Stories from './stories';
import logo from './logo.svg';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <a href="#">
            <img src={logo} alt="Remote Stories" />
          </a>

          <ul className="App-navigation-list">
            <li>
              <a className="App-navigation-list-link-active" href="#">About</a>
            </li>
            <li>
              <a className="App-navigation-list-link" href="#">New</a>
            </li>
            <li>
              <a className="App-navigation-list-link" href="#">Popular</a>
            </li>
            <li>
              <a className="App-navigation-list-link" href="#">Submit</a>
            </li>
          </ul>
        </nav>

        <Stories />
      </div>
    );
  }
}
