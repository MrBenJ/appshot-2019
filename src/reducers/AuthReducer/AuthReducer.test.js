// @flow

import initialState from '../initialState';

import {
  AUTH_CURRENT_USER_OK,
  AUTH_CURRENT_USER_ERROR
} from '@actions/actionTypes';
import AuthReducer from './AuthReducer';

describe('AuthReducer tests', () => {
  it('Handles AUTH_CURRENT_USER_OK', () => {
    const mockAction = {
      type: AUTH_CURRENT_USER_OK,
      payload: {
        user: {
          auth_token: 'llvm12345',
          admin: false,
          first_name: 'Jeremy',
          last_name: 'Splonkers',
          user_email: 'splonkey@splockers.net',
          user_id: 'fee453'
        }
      }
    };

    const result = AuthReducer(undefined, mockAction);

    expect(result).toEqual({
      token: 'llvm12345',
      isAdmin: false,
      first_name: 'Jeremy',
      last_name: 'Splonkers',
      email: 'splonkey@splockers.net',
      user_id: 'fee453'
    });
  });

  it('Handles AUTH_CURRENT_USER_ERROR', () => {
    const mockAction = { type: AUTH_CURRENT_USER_ERROR };

    const result = AuthReducer(undefined, mockAction);

    expect(result).toEqual(initialState.auth);
  });
});
