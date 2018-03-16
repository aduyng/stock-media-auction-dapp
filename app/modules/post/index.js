import createReducer from '../createReducer';
import initialState from './initialState';
import UPLOAD_FILE_SUCCESS from './handlers/UPLOAD_FILE_SUCCESS';

export default createReducer(initialState, {
  UPLOAD_FILE_SUCCESS,
});
