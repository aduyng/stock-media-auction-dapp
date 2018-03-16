import B from 'bluebird';
import { first, extend, pick } from 'lodash';
import ipfs from '../utils/ipfs';
import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR } from './consts';

const readFile = ({ file }) => new B((resolve) => {
  const reader = new FileReader();
  reader.onloadend = () => resolve({ buffer: Buffer.from(reader.result) });
  reader.readAsArrayBuffer(file);
});

export default ({ file }) => async (dispatch) => {
  const { buffer } = await readFile({ file });
  const fileToDispatch = {
    name: file.name,
    type: file.type,
  };

  try {
    const response = await ipfs().add(buffer);
    return dispatch({
      type: UPLOAD_FILE_SUCCESS,
      payload: {
        file: extend({
          buffer,
        }, fileToDispatch, pick(first(response), 'hash', 'path', 'size')),
      },
    });
  } catch (error) {
    return dispatch({
      type: UPLOAD_FILE_ERROR,
      payload: {
        file: fileToDispatch,
      },
    });
  }
};
