/* @flow */

import type { Action, ThunkAction } from 'src/types';
import { canUseLocalStorage } from 'src/utils';

export const RECEIVE = 'user/RECEIVE';

export function fetchUser(): ThunkAction {
  return (dispatch, getState, api) => {
    const { user } = getState();

    if (user.isPersisted) {
      return;
    }

    api.my.users.findOne().then(({ body: user }) => {
      dispatch(receiveUser(user));
    });
  };
}

export function createUser(): ThunkAction {
  return async (dispatch, getState, api) => {
    const { user } = getState();

    if (user.isPersisted) {
      return;
    }

    const password = Math.random().toString(36).slice(2);

    const { body } = await api.my.users.create({ password });
    dispatch(receiveUser(body));
    await dispatch(createUserToken(body, password));
  };
}

function receiveUser(user): Action {
  return { type: RECEIVE, user };
}

function createUserToken(user, password): ThunkAction {
  return async (dispatch, _getState, api) => {
    const auth = { id: user.id, password };

    const { body } = await api.userToken.create({ auth });
    if (canUseLocalStorage()) localStorage.setItem('token', body.jwt);
  };
}
