import { first } from 'lodash';

export default (state, { payload: { accounts = [] } }) => ({
  ...state,
  accounts,
  currentAccount: first(accounts),
});
