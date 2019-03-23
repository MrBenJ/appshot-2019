---
to: src/components/<%= name %>/<%= name %>.js
---
// @flow
import React from 'react';
import style from './<%= name %>.style';

type <%= name %>Props = {

};

export default function <%= name %>(props: <%= name %>Props) {
  return (
    <div css={style} />
  );
}
