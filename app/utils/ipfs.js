const ipfsAPI = require('ipfs-api');

let connection;

export default () => {
  if (!connection) {
    // connection = ipfsApi(process.env.ipfsHost, process.env.ipfsPort);
    connection = ipfsAPI('localhost', '5001');
  }

  return connection;
};
