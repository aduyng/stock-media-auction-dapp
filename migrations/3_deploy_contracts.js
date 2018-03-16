const SMACoin = artifacts.require('./SMACoin.sol');

module.exports = function (deployer) {
  deployer.deploy(SMACoin);
};
