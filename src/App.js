/* @flow */

import './App.css';
import React from 'react';
import Stories from './stories';
import logo from './logo.svg';

export default function App() {
  return (
    <div className="App">
      <div className="App-illustration" />

      <div className="App-content">
        <nav className="App-content-navigation">
          <a className="App-content-navigation-logo" href="#">
            <img src={logo} alt="Remote Stories" />
          </a>

          <ul className="App-content-navigation-list">
            <li>
              <a className="App-content-navigation-list-link-active" href="#">About</a>
            </li>
            <li>
              <a className="App-content-navigation-list-link" href="#">New</a>
            </li>
            <li>
              <a className="App-content-navigation-list-link" href="#">Popular</a>
            </li>
            <li>
              <a className="App-content-navigation-list-link" href="#">Submit</a>
            </li>
          </ul>
        </nav>

        <Stories />
      </div>
    </div>
  );
}
