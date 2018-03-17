const Auction = artifacts.require('./Auction.sol');
const mock = require('../mocks/6');

module.exports = function migrate(deployer, network, accounts) {
  const {
    periodInMs,
    currentTimestamp,
    creator,
    startingPrice,
  } = mock({ accounts });

  deployer.deploy(Auction, periodInMs, currentTimestamp, creator, startingPrice);
};
