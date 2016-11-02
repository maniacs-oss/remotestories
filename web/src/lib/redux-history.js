/* @flow */

import React from 'react';
import type { Dispatch } from 'src/types';
import { connect } from 'react-redux';
import { receiveHistory } from 'src/actions/history';

type Props = {
  dispatch: Dispatch,
};

class ReduxHistory extends React.Component {
  props: Props;

  static contextTypes = {
    history: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    const { history } = this.context;
    this.props.dispatch(receiveHistory({ history }));
  }

  render() {
    return null;
  }
}

export default connect()(ReduxHistory);
