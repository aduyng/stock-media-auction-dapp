const SMACoin = artifacts.require('./SMACoin.sol');

module.exports = function migrate(deployer) {
  deployer.deploy(SMACoin);
};
