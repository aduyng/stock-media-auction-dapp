import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import CircularProgress from 'material-ui/CircularProgress';
import Account from '../Account';
import { yellow100 } from 'material-ui/styles/colors';

import './styles/Nav.scss';


export default class Nav extends Component {
  static propTypes = {
    toggleLeftSidebar: func.isRequired,
    isLeftSidebarOpened: bool.isRequired,
    isLoading: bool.isRequired,
    isLoggedIn: bool.isRequired,
    hasWeb3: bool.isRequired,
  };

  render() {
    const {
      isLoading,
    } = this.props;

    if (isLoading) {
      return (
        <AppBar
          title="Loading, please wait..."
          iconElementLeft={<CircularProgress size={40} color={yellow100} />}
        />
      );
    }

    const {
      hasWeb3,
    } = this.props;

    if (!hasWeb3) {
      return null;
    }

    const {
      toggleLeftSidebar, isLeftSidebarOpened, isLoggedIn,
    } = this.props;

    return (
      <AppBar
        title={process.env.title}
        iconElementLeft={isLeftSidebarOpened ? <IconButton><NavigationClose /></IconButton> : <IconButton><NavigationMenu /></IconButton>}
        onLeftIconButtonClick={toggleLeftSidebar}
        iconElementRight={isLoggedIn ? <Account /> : null}
      />
    );
  }
}
