/* @flow */

import comments from './comments';
import stories from './stories';
import { combineReducers } from 'redux'

export default combineReducers({
  comments,
  stories,
});
