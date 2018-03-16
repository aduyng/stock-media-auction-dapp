import B from 'bluebird';
// import ipfs from '../utils/ipfs';

const readFile = ({ file }) => new B((resolve) => {
  const reader = new FileReader();
  reader.onloadend = () => resolve({ buffer: Buffer.from(reader.result) });
  reader.readAsArrayBuffer(file);
});

export default ({ file }) => async (dispatch) => {
  const { buffer } = await readFile({ file });
  console.log('TODO: add file to IPFS here', buffer);
  // const response = ipfs().add(buffer);
  //
  // console.log(response);
};
