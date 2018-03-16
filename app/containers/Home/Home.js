import React, { Component } from 'react';
import SellFloatingActionButton from '../SellFloatingActionButton';

export default class Home extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SellFloatingActionButton href="#/upload" />
      </div>
    );
  }
}
