import React, { Component } from 'react';
import { string } from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  right: 20,
  position: 'fixed',
  bottom: 20,
};

export default class SellFloatingActionButton extends Component {
  static propTypes = {
    href: string.isRequired,
  };

  render() {
    return (
      <FloatingActionButton style={style} title="Upload and Sell" href={this.props.href}>
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}
