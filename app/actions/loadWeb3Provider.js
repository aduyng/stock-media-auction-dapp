import { LOAD_WEB3_PROVIDER, WEB3_PROVIDER_IS_NOT_AVAILABLE } from './consts';

export default () => async (dispatch) => {
  if (typeof global.web3 !== 'undefined') {
    const { default: Web3 } = await import(/* webpackChunkName: "js/web3" */ 'web3');
    global.web3 = new Web3(web3.currentProvider);
    return dispatch({
      type: LOAD_WEB3_PROVIDER,
    });
  }

  return dispatch({
    type: WEB3_PROVIDER_IS_NOT_AVAILABLE,
  });
};
