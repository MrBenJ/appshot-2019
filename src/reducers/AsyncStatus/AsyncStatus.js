// @flow
import { type BaseAction } from '@actions/actionTypes';
import initialState, { type AsyncState } from '@reducers/initialState';

/**
 * Handles the Redux state for any asynchronous requests
 * @param {Object} state:  AsyncState - state of the current reducer
 * @param {Action} action: BaseAction - action being fired
 */
export default function AsyncStatusReducer(
  state: AsyncState = initialState.async,
  action: BaseAction
) {
  const { type } = action;

  /**
   * Originating 'reducer' data that's handling an async request
   * @type {String}
   */
  const origin = type.split('_')[0].toLowerCase();
  const nextState = { ...state };
  const isAsync = type.endsWith('ASYNC');

  nextState[origin] = isAsync;

  switch (true) {
    /**
     * Adds 1 for a request in progress
     */
    case isAsync: {
      return {
        ...nextState,
        requestsInProgress: nextState.requestsInProgress + 1
      };
    }

    /**
     * Subtracts 1 when a request is resolved
     */
    case type.endsWith('OK') || type.endsWith('ERROR'): {
      return {
        ...nextState,
        requestsInProgress:
          nextState.requestsInProgress - 1 < 0
            ? 0
            : nextState.requestsInProgress - 1
      };
    }

    default: {
      return state;
    }
  }
}
