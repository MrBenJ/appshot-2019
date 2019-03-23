// @flow
import React, { type Node } from 'react';

import ResponsiveContainer from '@components/ResponsiveContainer';
import style from './Footer.style';

type FooterProps = {
  /** class name to pass in for styling */
  className?: ?string
};

/**
 * The footer. Hidden on MD devices or smaller
 */
function Footer(props: FooterProps): Node {
  const { className } = props;
  return (
    <footer className={className} css={style}>
      <ResponsiveContainer>
        Footer!
      </ResponsiveContainer>
    </footer>
  );
}

export default Footer;
