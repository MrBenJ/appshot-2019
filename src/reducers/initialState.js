// @flow
/**
 * Initial Redux application state
 *
 * Every `type` refers to a slice of state and is annotated with a short
 * description of what that key/value pair is
 */

/**
 * Authentication state - determines who's logged in and who's an admin
 * on the WebLinc application
 * @type {Object}
 */
export type AuthState = {
  /** @type {String} User token to use for requests */
  +token: string,

  /** @type {String} User's first name */
  +first_name?: ?string,

  /** @type {String} User's last name */
  +last_name?: ?string,

  /** @type {Boolean} true if a user is an admin (Weblinc) */
  +isAdmin?: boolean,

  /** @type {String} User Id from Weblinc */
  +user_id?: ?string,

  /** @type {String} User's registered email */
  +email?: ?string
};

export type AsyncState = {
  /** @type {Number} The total number of requests in progress */
  +requestsInProgress: number,

  /** @type {Boolean} true if an auth request is in progress */
  +auth: boolean
};

/** @type {Object} A full descriptor of the entire application's redux state */
export type ReduxStateDescriptor = {
  +auth: AuthState,
  +async: AsyncState
};

/**
 * Initial values inside of Redux State
 */
export default {
  auth: {
    token: '',
    first_name: '',
    last_name: '',
    isAdmin: false,
    user_id: '',
    email: ''
  },
  async: {
    requestsInProgress: 0,
    auth: false
  }
};
