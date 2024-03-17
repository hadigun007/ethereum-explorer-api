// import { Web3 } from "web3";
// import {abi, bytecode} from '../MultisigWallet1'

// async function main() {
//   const web3 = new Web3("http://127.0.0.1:8545");
//   const signer = web3.eth.accounts.privateKeyToAccount(
//     "0xf19b7c8077b2a5ed2a9407e277b08fe86d8bd905cf01dc289e39befdae280a5a"
//   );

//   web3.eth.accounts.wallet.add(signer);

//   const contract = new web3.eth.Contract(abi);
//   const deployTx = contract.deploy(); 
//   const deployedContract = await deployTx
//     .send({
//       from: signer.address,
//       gas: await deployTx.estimateGas(),
//     })
//     .once("transactionHash", (txhash) => {
//       console.log(`Mining deployment transaction ...`);
//       console.log(txhash);
//     });
//   // The contract is now deployed on chain!
//   console.log(`Contract deployed at ${deployedContract.options.address}`);
//   console.log(
//     `Add DEMO_CONTRACT to the.env file to store the contract address: ${deployedContract.options.address}`
//   );
// }

// main();
