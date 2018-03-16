import createReducer from '../createReducer';
import initialState from './initialState';
import REQUEST_ACCOUNTS from './handlers/REQUEST_ACCOUNTS';
import APPLICATION_INITIALIZED from './handlers/APPLICATION_INITIALIZED';

export default createReducer(initialState, {
  REQUEST_ACCOUNTS,
  APPLICATION_INITIALIZED,
});
