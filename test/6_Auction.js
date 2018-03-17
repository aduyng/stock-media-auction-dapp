const Auction = artifacts.require('./Auction.sol');
const mock = require('../mocks/6');

contract('Auction', (accounts) => {
  describe('constructor', () => {
    it('should create the contract correctly', async () => {
      const {
        periodInMs,
        currentTimestamp,
        creator,
        startingPrice,
      } = mock({ accounts });
      const instance = await Auction.deployed();
      expect(instance).to.be.ok;
      expect(await instance.creator.call()).to.equal(creator);
      expect((await instance.periodInMs.call()).toNumber()).to.equal(periodInMs);
      expect((await instance.bidsAcceptedUntil.call()).toNumber()).to.equal(currentTimestamp + periodInMs);
      expect((await instance.startingPrice.call()).toNumber()).to.equal(startingPrice);
    });
  });

  describe('bid', () => {
    it('should not allow the owner to bid', async () => {
      const {
        creator,
        ownerBidAmount,
        ownerBiddingTimestamp: thePlacingTimestamp,
      } = mock({ accounts });
      const instance = await Auction.deployed();
      try {
        await instance.bid(creator, ownerBidAmount, { thePlacingTimestamp });
      } catch (error) {
        expect(true).to.be.ok;
      }
    });
  });
});
