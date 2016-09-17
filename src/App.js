/* @flow */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
          <a className="App-navigation-logo-active" href="#">
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

        <div>
          <h2>Welcome to React</h2>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
