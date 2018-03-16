import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import leftSidebar from './leftSidebar';
import app from './app';

export default combineReducers({
  router: routerReducer,
  counter,
  leftSidebar,
  app,
});
