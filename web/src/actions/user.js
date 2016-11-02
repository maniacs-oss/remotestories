/* @flow */

import type { Action, ThunkAction } from 'src/types';
import { randomNumber } from 'src/utils';

export const RECEIVE = 'user/RECEIVE';

export function createOrFetchUser(): ThunkAction {
  return async (dispatch, getState) => {
    const { user } = getState();

    if (user.isPersisted) {
      return;
    }

    // do async fetch user here
    // ...
    // end
    // if response code is 404

    dispatch(createUser());
  };
}

function createUser(): ThunkAction {
  return async (dispatch) => {
    // do async stuff here
    // ...
    // end

    const user = {
      id: randomNumber(1000),
    };

    dispatch(receiveUser({ user }));
  };
}

function receiveUser({ user }): Action {
  return { type: RECEIVE, user };
}
