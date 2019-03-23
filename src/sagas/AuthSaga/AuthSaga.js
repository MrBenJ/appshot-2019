// @flow
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  AUTH_LOGIN_ASYNC,
  AUTH_LOGIN_OK,
  AUTH_LOGIN_ERROR
} from '@actions/actionTypes';

export function* login(/* action */): Generator<any, any, any> {
  try {
    const { data } = yield call(axios.get, '/login');
    yield put({
      type: AUTH_LOGIN_OK,
      payload: { user: data }
    });
  } catch (error) {
    yield put({
      type: AUTH_LOGIN_ERROR,
      payload: { error }
    });
  }
}

const rootAuthSaga = [takeEvery(AUTH_LOGIN_ASYNC, login)];

export default rootAuthSaga;
