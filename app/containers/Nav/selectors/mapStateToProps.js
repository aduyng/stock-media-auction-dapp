import { isEmpty } from 'lodash';

export default state => ({
  isLeftSidebarOpened: state.leftSidebar.isOpened,
  isLoading: state.app.isLoading,
  isLoggedIn: !isEmpty(state.app.currentAccount),
  hasWeb3: typeof global.web3 !== 'undefined',
});
