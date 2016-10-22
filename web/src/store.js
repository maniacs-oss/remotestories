/* @flow */

import rootReducer from 'src/ducks';
import { createStore } from 'redux'

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
