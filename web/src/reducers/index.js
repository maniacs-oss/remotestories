/* @flow */

import comments from './comments';
import history from './history';
import reactions from './reactions';
import stories from './stories';
import { combineReducers } from 'redux'

export default combineReducers({
  comments,
  history,
  reactions,
  stories,
});
