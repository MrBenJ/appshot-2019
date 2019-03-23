// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer> unit tests', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('footer')).toHaveLength(1);
  });
});
