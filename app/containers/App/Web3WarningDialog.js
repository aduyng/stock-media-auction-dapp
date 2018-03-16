import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Web3WarningDialog extends Component {
  onRefreshClick = () => {
    global.location.reload();
  }

  render() {
    const actions = [
      <FlatButton
        label="Refresh"
        primary
        onClick={this.onRefreshClick}
      />,
    ];

    return (
      <Dialog
        actions={actions}
        modal
        open
      >
    Please install and sign in to <a href="https://metamask.io/#how-it-works" target="_blank" rel="noopener noreferrer">MetaMask</a> and refresh this page
      </Dialog>
    );
  }
}
