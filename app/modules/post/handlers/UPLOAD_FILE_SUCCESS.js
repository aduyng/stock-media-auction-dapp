export default (state, { payload: { file } }) => ({
  ...state,
  file,
});
