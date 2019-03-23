// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import { compose } from 'redux';

import { withI18n, type I18nProps } from '@components/I18nProvider';
import ResponsiveContainer from '@components/ResponsiveContainer';
import style from './Header.style';

type HeaderProps = {
  /** class to pass in for styling */
  className?: ?string,

} & I18nProps;

type HeaderState = {};

/**
 * The header - mobile and desktop. Woohoo.
 */
class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    const { className } = this.props;

    return (
      <header className={classNames(className)} css={style}>
        <ResponsiveContainer>
          <div className="desktop">Desktop Header!</div>
          <div className="mobile">Mobile Header!</div>
        </ResponsiveContainer>
      </header>
    );
  }
}

export { Header };
export default compose(
  withI18n
)(Header);
