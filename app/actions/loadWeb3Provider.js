import Web3 from 'web3';
import { LOAD_WEB3_PROVIDER, WEB3_PROVIDER_IS_NOT_AVAILABLE } from './consts';

export default () => (dispatch) => {
  if (typeof global.web3 !== 'undefined') {
    global.web3 = new Web3(web3.currentProvider);
    return dispatch({
      type: LOAD_WEB3_PROVIDER,
    });
  }

  return dispatch({
    type: WEB3_PROVIDER_IS_NOT_AVAILABLE,
  });
};
