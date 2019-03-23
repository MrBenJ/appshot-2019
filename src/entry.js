// @flow
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import I18nProvider from '@components/I18nProvider';
import configureStore from '@src/store/configureStore';
import rootSaga from '@sagas';
import strings from './strings.yaml';

const target = document.querySelector('#appRoot');

if (!target) {
  throw new Error(
    'Cannot find #appRoot. Please ensure ./dist/index.html has this element'
  );
}
const { store, sagaMiddleware } = configureStore();

/**
 * Global app architecture and providers live here in the initial ReactDOM render
 */
render(
  <Provider store={store}>
    <I18nProvider strings={strings}>
      <App />
    </I18nProvider>
  </Provider>,
  target
);

sagaMiddleware.run(rootSaga);
