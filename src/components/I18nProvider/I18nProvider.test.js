// @flow
import React from 'react';
import { shallow, mount } from 'enzyme';

import I18nProvider from './I18nProvider';
import strings from '@src/__mocks__/yamlMock.js';

describe('<I18nProvider> tests', () => {
  it('Renders without crashing (smokescreen)', () => {
    const wrapper = shallow(
      <I18nProvider strings={strings}>
        <div>hello</div>
      </I18nProvider>
    );

    expect(wrapper).toBeTruthy();
  });

  it('Renders children', () => {
    const wrapper = mount(
      <I18nProvider strings={strings}>
        <div className="dude">Dude!</div>
      </I18nProvider>
    );

    expect(wrapper.find('.dude')).toHaveLength(1);
  });

  describe('<I18nProvider> Instance Methods', () => {
    it('Translates to American English by default', () => {
      const wrapper = shallow(
        <I18nProvider strings={strings}>
          <div>I like potatoes</div>
        </I18nProvider>
      );

      const instance = wrapper.instance();
      expect(instance.translate('Header.Shop')).toBe('Shop');
    });

    it('Shows a string for bad translation key', () => {
      const wrapper = shallow(
        <I18nProvider strings={strings}>
          <div>I like potatoes</div>
        </I18nProvider>
      );

      const instance = wrapper.instance();

      expect(instance.translate('Header.NoExist')).toBe(
        'No entry found for Header.NoExist'
      );
    });

    it('Sets a new language with setLanguage', done => {
      const wrapper = shallow(
        <I18nProvider strings={strings}>
          <div>I like potatoes</div>
        </I18nProvider>
      );

      const instance = wrapper.instance();
      instance.setLanguage('es');

      setTimeout(() => {
        expect(instance.state.language).toBe('es');

        expect(instance.translate('Header.Shop')).toBe('Tienda');
        done();
      }, 0);
    });
  });
});
