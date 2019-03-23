// @flow
import React from 'react';
import { mount, shallow } from 'enzyme';

import Header from './Header';

describe('<Header> unit tests', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toBeTruthy();
  });

  it('Renders a <header> element', () => {
    const wrapper = mount(
      <Header className="yes" />
    );

    expect(wrapper.find('header')).toHaveLength(1);
    expect(
      wrapper
        .find('header')
        .props()
        .className.includes('yes')
    ).toBe(true);
  });
});
