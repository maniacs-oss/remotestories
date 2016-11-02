/* @flow */

import api from './api';
import entities from './entities';
import history from './history';
import user from './user';
import { combineReducers } from 'redux'

export default combineReducers({
  api,
  entities,
  history,
  user,
});
