/* @flow */

import About from 'src/pages/about';
import Legal from 'src/pages/legal';
import NotFound from 'src/pages/not-found';
import React from 'react';
import StoryDetail from 'src/pages/story-detail';
import StoryForm from 'src/pages/story-form';
import StoryList from 'src/pages/story-list';
import store from 'src/store';
import type { Dispatch } from 'src/types';
import { BrowserRouter, Match, Miss, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';
import { fetchUser } from 'src/actions/user';

const redirectToHome = () => <Redirect to="/" />;

type Props = {
  dispatch: Dispatch,
};

class App extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={StoryList} />
          <Match pattern="/about" component={About} />
          <Match pattern="/newest" component={StoryList} />
          <Match exactly pattern="/stories" render={redirectToHome} />
          <Match pattern="/stories/new" component={StoryForm} />
          <Match pattern="/stories/:id(\d+)" component={StoryDetail} />
          <Match pattern="/terms" component={Legal} />
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    );
  }
}

const withStore = (Component) => () => (
  <Provider store={store}>
    <Component />
  </Provider>
);

export default withStore(connect()(App));
