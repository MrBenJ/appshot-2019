// @flow
import React, { type Node } from 'react';
import { I18nConsumer } from './I18nProvider';

export type I18nProps = {
  setLanguage: string => void,
  t: string => string
};

export default function withI18n(Component: any) {
  return function WithI18NComponent(props: any): Node {
    return (
      <I18nConsumer>
        {values => <Component {...values} {...props} />}
      </I18nConsumer>
    );
  };
}
