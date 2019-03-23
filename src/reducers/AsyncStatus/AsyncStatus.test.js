// @flow
import AsyncStatusReducer from './AsyncStatus';

describe('AsyncStatusReducer tests', () => {
  describe('with default initialState', () => {
    it('Adds +1 to callsInProgress with _ASYNC', () => {
      const actual = AsyncStatusReducer(undefined, {
        type: 'AUTH_THING_ASYNC'
      });

      expect(actual).toEqual({
        auth: true,
        requestsInProgress: 1
      });
    });

    it('Does -1 to callsInProgress with _OK or _ERROR', () => {
      const withOk = AsyncStatusReducer(undefined, {
        type: 'AUTH_WHATEVER_OK'
      });

      expect(withOk).toEqual({
        auth: false,
        requestsInProgress: 0
      });

      const withError = AsyncStatusReducer(undefined, {
        type: 'AUTH_SURE_ERROR'
      });

      expect(withError).toEqual({
        auth: false,
        requestsInProgress: 0
      });
    });

    it('Returns state for incompatible actions', () => {
      const actual = AsyncStatusReducer(undefined, { type: 'LOL_DUDE_SURE' });

      expect(actual).toEqual({
        auth: false,
        requestsInProgress: 0
      });
    });
  });

  describe('with previous state', () => {
    const inProgressState = {
      auth: true,
      requestsInProgress: 1
    };

    const emptyState = {
      auth: false,
      requestsInProgress: 0
    };

    it('Adds +1 to callsInProgress with _ASYNC', () => {
      const withPreviousProgress = AsyncStatusReducer(inProgressState, {
        type: 'AUTH_LOGOUT_ASYNC'
      });

      expect(withPreviousProgress).toEqual({
        auth: true,
        requestsInProgress: 2
      });

      const withEmptyProgress = AsyncStatusReducer(emptyState, {
        type: 'AUTH_LOGOUT_ASYNC'
      });

      expect(withEmptyProgress).toEqual({
        auth: true,
        requestsInProgress: 1
      });
    });

    it('Subtracts -1 to callsInProgress with _OK or _ERROR', () => {
      const withPreviousProgress = AsyncStatusReducer(inProgressState, {
        type: 'AUTH_LOGIN_OK'
      });

      expect(withPreviousProgress).toEqual({
        auth: false,
        requestsInProgress: 0
      });

      const withEmptyProgress = AsyncStatusReducer(emptyState, {
        type: 'AUTH_LOGIN_ERROR'
      });

      expect(withEmptyProgress).toEqual({
        auth: false,
        requestsInProgress: 0
      });
    });

    it('Returns state for incompatible actions', () => {
      const actual = AsyncStatusReducer(emptyState, { type: 'LOL_DUDE_SURE' });
      expect(actual).toEqual(emptyState);

      const withPrevious = AsyncStatusReducer(inProgressState, {
        type: 'NOT_AN_ACTION'
      });
      expect(withPrevious).toEqual(inProgressState);
    });
  });
});
