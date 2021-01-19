pragma solidity ^0.6.0;

contract Proxy {
  function gibeTokens(address _to, uint _value) public {
    address(0x53ecB9a2a1BAC32175B2895f696c8E626F30f2a2).call(abi.encodeWithSignature("transfer(address, uint256)", _to, _value));
  }
}
