// LEVEL GOALS:
// 1. Guess coin flip correctly 10 times in a row
// -------------------------------
// STRATEGY:
// 1. Noticed "random" num is transparently generated - can be reliably predicted
// 2. Create attacker Solidity contract that calculates
//      the random number using same inputs, then calls
//      the target flip() function with correct guess
// 3. Call the attacker function 10 times to get counter to 10
// -------------------------------------------- 
// STEPS TO COMPLETE LEVEL
// -----------------------

// 1 - Code the attacker Solidity contract in Remix
// see predictFlip.sol

// 2 - Deploy attacker contract to Rinkeby via Remix

// 3 - Call predictFlip's flip() function 10 times via Remix

// 4 - Call consecutiveWins() in target contract to check predictions work
await contract.consecutiveWins()
