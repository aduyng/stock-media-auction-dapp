import B from 'bluebird';
import { REQUEST_ACCOUNTS } from './consts';

export default () => async (dispatch) => {
  const accounts = await B.promisify(web3.eth.getAccounts, web3.eth)();

  return dispatch({
    type: REQUEST_ACCOUNTS,
    payload: { accounts },
  });
};
