const ipfsAPI = require('ipfs-api');

let connection;

export default () => {
  if (!connection) {
    connection = ipfsAPI(process.env.ipfsHost, process.env.ipfsPort);
  }

  return connection;
};
