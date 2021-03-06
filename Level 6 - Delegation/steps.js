// LEVEL GOALS:
// 1. Claim ownership of contract instance
// -------------------------------
// STRATEGY:
// 1. By triggering the Delegation contract to delegatecall the pwn()
// function in Delegate, we can preserve the msg.sender (and msg.value)
// values that we originally sent in the function call to the Delegation contract.
// 2. This means msg.sender will still be our address even though the Delegation
// contract is calling the Delegate contract's pwn() function.
// 3. This will set our address as the owner in Delegate.
// 4. To do this, we need to trigger the fallback function in Delegation,
// and make it call a pwn() function in Delegate. We do this by passing the
// hash of the pwn() function in the data field.
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