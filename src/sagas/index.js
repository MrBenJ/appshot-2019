// @flow
import { all, type AllEffect } from 'redux-saga/effects';

import AuthSaga from './AuthSaga';

export default function* rootSaga(): Generator<AllEffect, void, void> {
  yield all([...AuthSaga]);
}
