// @flow
import React, { type Fragment, type Node } from 'react';

import ResponsiveContainer from '@components/ResponsiveContainer';
import Header from '@components/Header';
import Footer from '@components/Footer';

type PageProps = {
  /** Content to display under <Header /> and above <Footer />  */
  children: Node,

  /** Displays the header if true */
  showHeader?: ?boolean,

  /** Displays the footer if true */
  showFooter?: ?boolean,

  /** Uses a ResponsiveContainer element as root child if true */
  useContainer?: ?boolean
};
/**
 * Layout component that by default, renders a header and a footer.
 * This is the main component that renders the base layout of any view
 * on the app.
 */
export default function Page(props: PageProps): Fragment {
  const { showHeader, showFooter, useContainer, children } = props;

  return (
    <>
      {showHeader && <Header />}
      {useContainer ? (
        <ResponsiveContainer>{children}</ResponsiveContainer>
      ) : (
        children
      )}
      {showFooter && <Footer />}
    </>
  );
}

Page.defaultProps = {
  showHeader: true,
  showFooter: true,
  useContainer: true
};
