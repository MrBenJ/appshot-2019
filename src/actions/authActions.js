// @flow
import { AUTH_LOGIN_ASYNC, type BaseAction } from './actionTypes';

export function login(): BaseAction {
  return {
    type: AUTH_LOGIN_ASYNC
  };
}
