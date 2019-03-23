// @flow
import React, { type Node, type Element } from 'react';
import style from './ResponsiveContainer.style';

type ResponsiveContainerProps = {
  /** Content to render inside the Responsive container */
  children: string | Node | Element<any>,

  /** Class name to use */
  className?: ?string
};

export default function ResponsiveContainer(props: ResponsiveContainerProps) {
  const { children, className } = props;
  return (
    <div className={className} css={style}>
      {children}
    </div>
  );
}
