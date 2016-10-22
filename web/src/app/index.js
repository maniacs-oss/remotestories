/* @flow */

import './styles.css';
import About from 'src/pages/about';
import Home from 'src/pages/home';
import New from 'src/pages/new';
import Popular from 'src/pages/popular';
import React from 'react';
import StoryDetail from 'src/pages/story-detail';
import Submit from 'src/pages/submit';
import illustration1 from './illustration-1.jpg';
import illustration2 from './illustration-2.jpg';
import logo from './logo.svg';
import rootReducer from 'src/ducks';
import { BrowserRouter, Match, Link } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const STORE = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={STORE}>
      <BrowserRouter>
        <Layout>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/new" component={New} />
          <Match pattern="/popular" component={Popular} />
          <Match pattern="/submit" component={Submit} />
          <Match pattern="/stories/:id" component={StoryDetail} />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

const Layout = ({ children }) => {
  const illustrationOfTheDay = new Date().getDay() % 2 === 0
    ? illustration1
    : illustration2;

  return (
    <div className="App">
      <div className="App-illustration">
        <img className="App-illustration-image" src={illustrationOfTheDay} alt="" />
      </div>

      <div className="App-container">
        <div className="App-content">
          <nav className="App-navigation">
            <Link className="App-navigation-logo" to="/">
              <img src={logo} alt="Remote Stories" />
            </Link>

            <ul className="App-navigation-list">
              <li>
                <Link activeClassName="App-navigation-link-active" className="App-navigation-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link activeClassName="App-navigation-link-active" className="App-navigation-link" to="/new">
                  New
                </Link>
              </li>
              <li>
                <Link activeClassName="App-navigation-link-active" className="App-navigation-link" to="/popular">
                  Popular
                </Link>
              </li>
              <li>
                <Link activeClassName="App-navigation-link-active" className="App-navigation-link" to="/submit">
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
};
