import savePost from '../../../actions/savePost';
import goBack from '../../../actions/goBack';

export default dispatch => ({
  save: args => dispatch(savePost(args)),
  goBack: args => dispatch(goBack(args)),
});
