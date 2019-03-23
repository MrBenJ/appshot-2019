// @flow

export type BaseAction = {
  type: string
};

/*
 *  =======================
 *  AUTHENTICATION
 *  =======================
 */
export type AuthAction = BaseAction & {
  payload: {
    user: Object
  }
};

export const AUTH_LOGIN_ASYNC: string = 'AUTH_LOGIN_ASYNC';
export const AUTH_LOGIN_OK: string = 'AUTH_LOGIN_OK';
export const AUTH_LOGIN_ERROR: string = 'AUTH_LOGIN_ERROR';

export const AUTH_LOGOUT_ASYNC: string = 'AUTH_LOGOUT_ASYNC';
export const AUTH_LOGOUT_OK: string = 'AUTH_LOGOUT_OK';
export const AUTH_LOGOUT_ERROR: string = 'AUTH_LOGOUT_ERROR';
