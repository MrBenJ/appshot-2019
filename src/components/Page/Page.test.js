// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';

import MockProvider from '@components/StyleguideWrapper';
import Page from './Page';

describe('<Page> unit tests', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Page>Content</Page>);

    expect(wrapper).toBeTruthy();
  });

  it('Does not render <Header> or <Footer> with appropriate props passed in', () => {
    const noHeaderWrapper = mount(
      <MockProvider>
        <Page showHeader={false}>Hi I am a page</Page>
      </MockProvider>
    );

    expect(noHeaderWrapper.find('header')).toHaveLength(0);
    expect(noHeaderWrapper.find('footer')).toHaveLength(1);

    const noFooterWrapper = mount(
      <MockProvider>
        <Page showFooter={false}>Hi I am a page</Page>
      </MockProvider>
    );

    expect(noFooterWrapper.find('footer')).toHaveLength(0);
    expect(noFooterWrapper.find('header')).toHaveLength(1);

    const nothingWrapper = mount(
      <MockProvider>
        <Page showHeader={false} showFooter={false}>
          Hi I am a page
        </Page>
      </MockProvider>
    );

    expect(nothingWrapper.find('footer')).toHaveLength(0);
    expect(nothingWrapper.find('header')).toHaveLength(0);
  });

  it('Does not render a <ResponsiveContainer> if useContainer={false}', () => {
    const wrapper = mount(
      <MockProvider>
        <Page useContainer={false} showHeader={false} showFooter={false}>
          <div className="content" />
        </Page>
      </MockProvider>
    );
    // Internally, <Header> and <Footer> both use <ResponsiveContainer>
    expect(wrapper.find('ResponsiveContainer')).toHaveLength(0);
  });
});
