import toggleLeftSidebar from '../../../actions/toggleLeftSidebar';
import loadWeb3Provider from '../../../actions/loadWeb3Provider';
import requestAccounts from '../../../actions/requestAccounts';
import notifyApplicationLoaded from '../../../actions/notifyApplicationLoaded';

export default dispatch => ({
  toggleLeftSidebar: () => dispatch(toggleLeftSidebar()),
  loadWeb3Provider: () => dispatch(loadWeb3Provider()),
  requestAccounts: () => dispatch(requestAccounts()),
  notifyApplicationLoaded: () => dispatch(notifyApplicationLoaded()),
});
