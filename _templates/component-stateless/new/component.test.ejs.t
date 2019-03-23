---
to: src/components/<%= name %>/<%= name %>.test.js
---
// @flow
import React from 'react';
import { shallow } from 'enzyme';

import <%= name %> from './<%= name %>';

describe('<%= name %> tests', () => {
  it('renders without crashing', ()=> {
    const wrapper = shallow(
      <<%= name %> />
    );

    expect(wrapper).toBeTruthy();
  });
});
