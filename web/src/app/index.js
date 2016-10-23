/* @flow */

import About from 'src/pages/about';
import Home from 'src/pages/home';
import New from 'src/pages/new';
import NotFound from 'src/pages/not-found';
import Popular from 'src/pages/popular';
import React from 'react';
import StoryDetail from 'src/pages/story-detail';
import Submit from 'src/pages/submit';
import store from 'src/store';
import { BrowserRouter, Match, Miss } from 'react-router'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/new" component={New} />
          <Match pattern="/popular" component={Popular} />
          <Match pattern="/submit" component={Submit} />
          <Match pattern="/stories/:id" component={StoryDetail} />
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
