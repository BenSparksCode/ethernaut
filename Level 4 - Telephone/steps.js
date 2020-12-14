// LEVEL GOALS:
// 1. Claim ownership of contract
// -------------------------------
// STRATEGY:
// 1. Noticed changeOwner() will set a new owner if tx.origin isn't the sender
// 2. Create attacker contract that calls changeOwner() by proxy,
//      setting my address as the new owner
// -------------------------------------------- 
// STEPS TO COMPLETE LEVEL
// -----------------------

// 1 - Code the attacker Solidity contract in Remix
// see proxy.sol

// 2 - Deploy attacker contract to Rinkeby via Remix

// 3 - Call proxy's changeTargetOwner() function via Remix
// Pass in my address as the arg

// 4 - Call owner() in target contract to check I own it
await contract.owner()
