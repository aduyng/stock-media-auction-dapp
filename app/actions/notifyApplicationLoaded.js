import { APPLICATION_INITIALIZED } from './consts';

export default () => dispatch => dispatch({
  type: APPLICATION_INITIALIZED,
});
