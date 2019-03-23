// @flow
import React from 'react';
import { mount } from 'enzyme';

import ProvidersMock from '@components/StyleguideWrapper';
import withI18n from './withI18n';

function DummyComponent(props: Object) {
  const { className, t, setLanguage } = props;
  const newProps = {};

  if (typeof t === 'function') {
    newProps['data-has-translate'] = true;
  }

  if (typeof setLanguage === 'function') {
    newProps['data-has-set-language'] = true;
  }

  return (
    <div {...newProps} className={className}>
      hello
    </div>
  );
}

describe('withI18n tests', () => {
  it('renders without crashing', () => {
    const Enhanced = withI18n(DummyComponent);

    const wrapper = mount(
      <ProvidersMock>
        <Enhanced />
      </ProvidersMock>
    );

    expect(wrapper).toBeTruthy();
  });

  it('sends in "t" and "setLanguage" props', () => {
    const Enhanced = withI18n(DummyComponent);

    const wrapper = mount(
      <ProvidersMock>
        <Enhanced />
      </ProvidersMock>
    );

    const hasSetLanguage = wrapper.find('[data-has-set-language=true]').length;
    expect(hasSetLanguage).toBeTruthy();

    const hasTranslate = wrapper.find('[data-has-translate=true]').length;
    expect(hasTranslate).toBeTruthy();
  });

  it('keeps previously passed in props', () => {
    const Enhanced = withI18n(DummyComponent);

    const wrapper = mount(
      <ProvidersMock>
        <Enhanced className="testing" />
      </ProvidersMock>
    );

    expect(wrapper.find('.testing').length).toBeTruthy();
  });
});
