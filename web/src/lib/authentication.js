/* @flow */

import React from 'react';
import type { Dispatch } from 'src/types';
import { connect } from 'react-redux';
import { fetchUser } from 'src/actions/user';

type Props = {
  dispatch: Dispatch,
};

class Authentication extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    return null;
  }
}

export default connect()(Authentication);
