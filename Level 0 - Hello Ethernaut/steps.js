// STEPS TO COMPLETE LEVEL
// -----------------------

// 1 - Set up MetaMask on Rinkeby testnet

// 2 - Get Rinkeby testnet ETH
// This faucet worked best for me, no social media required:
// https://rinkeby.faucet.epirus.io/#

// 3 - Tracking down the end task
await contract.info({gas: 1000000}) //hardcode gas because default was for more ETH than in wallet
await contract.info1({gas: 1000000})
await contract.info2("hello", {gas: 1000000})
await contract.infoNum({gas: 1000000})
await contract.info42({gas: 1000000})
await contract.theMethodName({gas: 1000000})
await contract.method7123949({gas: 1000000})
await contract.password({gas: 1000000}) //password = "ethernaut0"
await contract.authenticate("ethernaut0",{gas: 1000000})