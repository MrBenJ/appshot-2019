---
to: src/pages/<%= name %>/<%= name %>.js
---
// @flow
import React, { Component } from 'react';

import Page from '@components/Page';
import style from './<%= name %>.style.js';

type <%= name %>Props = {};

type <%= name %>State = {};

class <%= name %> extends Component<<%= name %>Props, <%= name %>State> {
  render() {
    return (
      <Page>
        <div css={style}>
          <%= name %>
        </div>
      </Page>
    );
  }
}

export default <%= name %>;
