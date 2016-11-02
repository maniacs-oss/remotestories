/* @flow */

import collections from './collections';
import stories from './stories';
import { combineReducers } from 'redux'

export default combineReducers({
  collections,
  stories,
});
