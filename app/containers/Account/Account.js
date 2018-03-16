import React, { Component } from 'react';
import { arrayOf, string } from 'prop-types';
import { map } from 'lodash';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import shortenAccount from '../../utils/shortenAccount';
import './styles/Account.scss';


export default class Account extends Component {
  static propTypes = {
    accounts: arrayOf(string).isRequired,
    currentAccount: string.isRequired,
  };

  renderAccounts() {
    return map(this.props.accounts, (account) => {
      if (account === this.props.currentAccount) {
        return (<MenuItem primaryText={account} leftIcon={<NavigationCheck />} />);
      }

      return (<MenuItem primaryText="Cut" />);
    });
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><AccountCircle /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText={shortenAccount({ account: this.props.currentAccount })}
          rightIcon={<ArrowDropRight />}
          menuItems={this.renderAccounts()}
        />
        <Divider />
        <MenuItem primaryText="Sign Out" leftIcon={<ExitToApp />} />
      </IconMenu>
    );
  }
}
