pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract Account is Ownable{
  event Sent(address indexed payee, uint256 amount, uint256 balance);
  event Received(address indexed payer, uint256 amount, uint256 balance);

  function Account() Ownable() public {}

  function () public payable {
    Received(msg.sender, msg.value, this.balance);
  }

  function sendTo(address payee, uint256 amount) public onlyOwner {
    require(payee != 0 && payee != address(this));
    require(amount > 0);
    payee.transfer(amount);
    Sent(payee, amount, this.balance);
  }
}
