pragma solidity ^0.4.19;

contract Auction {
    struct Bid{
        address bidder;
        uint amount;
        uint placedAt;
        bool hasBeenWithdrawn;
        uint withdrawnAt;
        bool hasBeenRefunded;
        uint refundedAt;
        bool hasBeenTransfered;
        uint transferedAt;
    }

    uint public startingPrice;
    address public creator;
    uint public periodInMs;
    uint public bidsAcceptedUntil;
    bool public isEnded;
    uint public endedAt;

    Bid[] public bids;
    uint public highestBidIndex;
    uint public highestAmount;

    event OnBidPlaced(Bid bid);
    event OnEnded(Bid bid);

    function Auction(
        uint thePeriodInMs,
        uint theCurrentTimestamp,
        address theCreator,
        uint theStartingPrice
    ) public {
        creator = theCreator;
        periodInMs = thePeriodInMs;
        bidsAcceptedUntil = theCurrentTimestamp + thePeriodInMs;
        startingPrice = theStartingPrice;
    }

    function bid(uint thePlacingTimestamp) public payable {
        require(msg.sender != creator);
        assert(!isEnded);
        require(thePlacingTimestamp <= bidsAcceptedUntil);
        require(startingPrice <= msg.value);

        if( bids.length > 0){
            require(msg.value > bids[highestBidIndex].amount);
        }

        bids.push(Bid({
            bidder: msg.sender,
            placedAt: thePlacingTimestamp,
            amount: msg.value,
            hasBeenWithdrawn: false,
            withdrawnAt: 0,
            hasBeenRefunded: false,
            refundedAt: 0,
            hasBeenTransfered: false,
            transferedAt: 0
        }));

        highestBidIndex = bids.length-1;
        highestAmount = msg.value;
    }

    function withdraw(uint theWithdrawnTimestamp) public {
        assert(!isEnded);
        assert(bids.length > 0);

        assert(bids[highestBidIndex].bidder == msg.sender);
        assert(bids[highestBidIndex].hasBeenWithdrawn);

        bids[highestBidIndex].hasBeenWithdrawn = true;
        bids[highestBidIndex].withdrawnAt = theWithdrawnTimestamp;
        msg.sender.transfer(bids[highestBidIndex].amount);
    }

    function terminate(uint theEndingTimestamp) public{
        assert(!isEnded);

        endedAt = theEndingTimestamp;
        isEnded = true;

        refundAll();
    }

    function end(uint theEndingTimestamp) public{
        assert(!isEnded);
        assert(bids[highestBidIndex].amount > 0);

        endedAt = theEndingTimestamp;
        isEnded = true;
        bids[highestBidIndex].hasBeenTransfered = true;
        bids[highestBidIndex].transferedAt = theEndingTimestamp;
        creator.transfer(bids[highestBidIndex].amount);
        refundAll();
    }

    function refundAll() private{
        for(uint i = 0; i < bids.length; i++){
            if(bids[i].hasBeenTransfered || bids[i].hasBeenWithdrawn || bids[i].hasBeenRefunded || bids[i].amount == 0){
                break;
            }
            bids[i].bidder.transfer(bids[i].amount);
        }
    }
}
