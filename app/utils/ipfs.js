let connection;

export default async () => {
  if (!connection) {
    connection = await import(/* webpackChunkName: "./js/ipfs" */ 'ipfs-api')
      .then(ipfsAPI => ipfsAPI(process.env.ipfsHost, process.env.ipfsPort));
  }

  return connection;
};
