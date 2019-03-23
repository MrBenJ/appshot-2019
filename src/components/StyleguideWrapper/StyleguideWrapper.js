// @flow
import React, { type Node } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import I18nProvider from '@components/I18nProvider';
import configureStore from '@src/store/configureStore';
import strings from '@src/strings.yaml';

const { store } = configureStore();

type StyleguideWrapperProps = {
  children: Node
};

/**
 * Used ONLY for react-styleguidist, or in Jest unit tests.
 * DO NOT USE IN PRODUCTION. THIS IS A MOCK/STUB
 *
 * Enables use of redux store and providers in components that need any of the
 * Provider components within React-Styleguidist or Jest tests. This also
 * provides Router context for any router links being rendered like <Link> or
 * <Redirect>
 */
export default function StyleguideWrapper(props: StyleguideWrapperProps): Node {
  const { children } = props;
  return (
    <div className="root">
      <Provider store={store}>
        <MemoryRouter>
          <I18nProvider strings={strings}>{children}</I18nProvider>
        </MemoryRouter>
      </Provider>
    </div>
  );
}
