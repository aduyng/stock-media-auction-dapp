import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar';
import Nav from '../Nav';
import Upload from '../Upload';
import Home from '../Home';
import Web3WarningDialog from './Web3WarningDialog';
import { WEB3_PROVIDER_IS_NOT_AVAILABLE } from '../../actions/consts';
import './styles/App.scss';


export default class App extends Component {
  static propTypes = {
    isLoading: bool.isRequired,
    isLoggedIn: bool.isRequired,
    hasWeb3: bool.isRequired,
    loadWeb3Provider: func.isRequired,
    requestAccounts: func.isRequired,
    notifyApplicationLoaded: func.isRequired,
  };

  componentWillMount = async () => {
    const { type } = await this.props.loadWeb3Provider();
    if (type !== WEB3_PROVIDER_IS_NOT_AVAILABLE) {
      await this.props.requestAccounts();
    }

    return this.props.notifyApplicationLoaded();
  }

  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <div>
          <Nav />
        </div>
      );
    }

    const { hasWeb3, isLoggedIn } = this.props;
    if (!hasWeb3 || !isLoggedIn) {
      return (<Web3WarningDialog />);
    }

    return (
      <div>
        <Nav />
        <LeftSidebar />
        <Route path="/home" component={Home} />
        <Route path="/upload" component={Upload} />
      </div>
    );
  }
}
