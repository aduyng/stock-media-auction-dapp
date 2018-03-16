import B from 'bluebird';
import { first, extend, pick } from 'lodash';
import ipfs from '../utils/ipfs';
import { SAVE_POST_ERROR, SAVE_POST_SUCCESS } from './consts';

const readFile = ({ file }) => new B((resolve) => {
  const reader = new FileReader();
  reader.onloadend = () => resolve({ buffer: Buffer.from(reader.result) });
  reader.readAsArrayBuffer(file);
});

export default ({
  file, title, description, startingPrice,
}) => async (dispatch) => {
  const payload = {};

  if (!file.isUploaded) {
    const { buffer } = await readFile({ file });
    payload.file = {
      name: file.name,
      type: file.type,
      buffer,
    };

    try {
      const ipfsInstance = await ipfs();
      const response = await ipfsInstance.add(buffer);
      payload.file = extend({
        isUploaded: true,
      }, payload.file, pick(first(response), 'hash', 'path', 'size'));
    } catch (error) {
      payload.file = extend({
        uploadError: error,
      }, payload.file);

      return dispatch({
        type: SAVE_POST_ERROR,
        payload,
      });
    }
  }

  // TODO: now save the post to etherium network
  payload.title = title;
  payload.description = description;
  payload.startingPrice = startingPrice;

  return dispatch({
    type: SAVE_POST_SUCCESS,
    payload,
  });
};
