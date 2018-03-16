import uploadFileToIPFS from '../../../actions/uploadFileToIPFS';

export default dispatch => ({
  uploadFile: args => dispatch(uploadFileToIPFS(args)),
});
