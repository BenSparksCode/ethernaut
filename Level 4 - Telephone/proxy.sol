pragma solidity ^0.6.0;

contract Proxy {
  function changeTargetOwner(address _owner) public {
    address(0xc777921E1733d322fa273Ed646EA209Da76bAC32).call(abi.encodeWithSignature("changeOwner(address)", _owner));
  }
}