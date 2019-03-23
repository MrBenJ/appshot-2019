// @flow
import React from 'react';
import { mount } from 'enzyme';

import ProviderMock from '@components/StyleguideWrapper';
import IndexPage from './IndexPage';

describe('IndexPage tests', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <ProviderMock>
        <IndexPage />
      </ProviderMock>
    );

    expect(wrapper.find('Page')).toHaveLength(1);
  });
});
