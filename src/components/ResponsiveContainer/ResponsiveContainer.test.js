// @flow
import React from 'react';
import { shallow } from 'enzyme';

import ResponsiveContainer from './ResponsiveContainer';

describe('ResponsiveContainer tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ResponsiveContainer>Content</ResponsiveContainer>);

    expect(wrapper).toBeTruthy();
  });
});
