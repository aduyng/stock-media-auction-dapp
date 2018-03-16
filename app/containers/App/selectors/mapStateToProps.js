import { isEmpty } from 'lodash';

export default state => ({
  isLeftSidebarOpened: state.leftSidebar.isOpened,
  isLoading: state.app.isLoading,
  hasWeb3: typeof global.web3 !== 'undefined',
  isLoggedIn: !isEmpty(state.app.currentAccount),
});
