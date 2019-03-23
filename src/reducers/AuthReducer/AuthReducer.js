// @flow
import initialState, { type AuthState } from '../initialState';
import {
  AUTH_LOGIN_OK,
  AUTH_LOGIN_ERROR,
  type AuthAction
} from '@actions/actionTypes';

export default function authReducer(
  state: AuthState = initialState.auth,
  action: AuthAction
) {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOGIN_OK: {
      const {
        auth_token: token,
        admin: isAdmin,
        first_name,
        last_name,
        user_id,
        user_email: email
      } = payload.user;

      if (token) {
        return {
          ...state,
          token,
          first_name,
          last_name,
          isAdmin,
          user_id,
          email
        };
      }

      return { ...state };
    }

    case AUTH_LOGIN_ERROR: {
      return state;
    }
    default: {
      return state;
    }
  }
}
