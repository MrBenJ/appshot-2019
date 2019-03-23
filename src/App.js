// @flow
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { hot } from 'react-hot-loader/root';
import 'sanitize.css';

import IndexPage from '@pages/IndexPage';
import style from './App.style';
import './global.css';

const history = createBrowserHistory();

history.listen(() => {
  // Log Analytics data here!
});
/**
 * Routes, routing and all the sort live in this entry point
 */
class App extends Component<{}> {
  render() {
    return (
      <div css={style}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={IndexPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(App);
