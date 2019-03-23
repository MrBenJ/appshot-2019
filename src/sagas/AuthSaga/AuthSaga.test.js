// @flow
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  AUTH_LOGIN_OK,
  AUTH_LOGIN_ERROR
} from '@actions/actionTypes';
import { login } from './AuthSaga';

describe('Authentication Saga tests', () => {
  describe('login()', () => {
    it('Handles OK', () => {
      const gen = login();
      expect(gen.next().value).toEqual(call(axios.get, '/login'));

      const data = {};
      expect(gen.next({ data }).value).toEqual(
        put({
          type: AUTH_LOGIN_OK,
          payload: { user: data }
        })
      );
    });

    it('Handles ERROR', () => {
      const gen = login();

      expect(gen.next().value).toEqual(call(axios.get, '/login'));

      const mockError = {
        message: 'Wifi is disabled'
      };

      expect(gen.throw(mockError).value).toEqual(
        put({
          type: AUTH_LOGIN_ERROR,
          payload: { error: mockError }
        })
      );
    });
  });
});
