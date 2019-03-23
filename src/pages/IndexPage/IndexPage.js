// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '@actions/authActions';
import Page from '@components/Page';
import style from './IndexPage.style.js';

type IndexPageProps = {
  actions: {
    authenticate: () => void
  }
};

type IndexPageState = {};

class IndexPage extends Component<IndexPageProps, IndexPageState> {
  onClick = (): void => {
    this.props.actions.authenticate();
  };

  render() {
    return (
      <Page>
        <div css={style}>
          <button onClick={this.onClick}>Log in test button</button>
        </div>
      </Page>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
