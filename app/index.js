import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// import contract from 'truffle-contract';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store, { history } from './store';
import App from './containers/App';
// import SMACoinArtifacts from '../build/contracts/SMACoin.json';
import './styles/index.scss';

// const SMACoin = contract(SMACoinArtifacts);

const start = () => {
  const target = document.querySelector('#root');

  return render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>,
    target,
  );
};

start();
