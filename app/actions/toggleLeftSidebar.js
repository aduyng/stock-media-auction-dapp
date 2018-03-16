import { OPEN_LEFT_SIDEBAR, CLOSE_LEFT_SIDEBAR } from './consts';

export default () => (dispatch, getState) => dispatch({
  type: getState().leftSidebar.isOpened ? CLOSE_LEFT_SIDEBAR : OPEN_LEFT_SIDEBAR,
});
