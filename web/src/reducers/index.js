/* @flow */

import api from './api';
import entities from './entities';
import user from './user';
import { combineReducers } from 'redux'

export default combineReducers({
  api,
  entities,
  user,
});
