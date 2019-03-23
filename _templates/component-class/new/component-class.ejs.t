---
to: src/components/<%= name %>/<%= name %>.js
---
// @flow
import React, { Component } from 'react';

import style from './<%= name %>.style.js';

type <%= name %>Props = {};

type <%= name %>State = {
  /** Active if true */
  active: boolean
};

class <%= name %> extends Component<<%= name %>Props, <%= name %>State> {
  constructor(props: <%= name %>Props) {
    super(props);

    this.state = {
      active: true
    };
  }

  render() {
    return (
      <div css={style} />
    )
  }
}

export default <%= name %>;
