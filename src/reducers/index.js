// @flow
import { combineReducers } from 'redux';
import auth from './AuthReducer';
import async from './AsyncStatus';

export default combineReducers({
  auth,
  async
});
