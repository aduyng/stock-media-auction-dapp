import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import leftSidebar from './leftSidebar';
import app from './app';
import post from './post';

export default combineReducers({
  router: routerReducer,
  leftSidebar,
  app,
  post,
});
