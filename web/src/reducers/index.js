/* @flow */

import comments from './comments';
import history from './history';
import stories from './stories';
import { combineReducers } from 'redux'

export default combineReducers({
  comments,
  history,
  stories,
});
