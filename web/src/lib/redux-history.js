/* @flow */

import React from 'react';
import type { Dispatch } from 'src/types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { receiveHistory } from 'src/actions/history';

class ReduxHistory extends React.Component {
  static contextTypes = {
    history: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    const { history } = this.context;
    this.props.receiveHistory({ history });
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  receiveHistory: bindActionCreators(receiveHistory, dispatch)
});

export default connect(null, mapDispatchToProps)(ReduxHistory);
