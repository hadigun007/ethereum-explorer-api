const {readFileSync, writeFileSync } = require("fs");
const solc = require("solc");


async function main() {
  const sourceCode = readFileSync("src/contract/MultisigWallet.sol", "utf8");
  const { abi, bytecode } = compiles(sourceCode, "MultisigWallet");
  const artifact = JSON.stringify({ abi, bytecode }, null, 2);
  writeFileSync("src/artifacts/MultisigWallet.json", artifact);
}

function compiles(sourceCode, contractName) {
  const input = {
    language: "Solidity",
    sources: { main: { content: sourceCode } },
    settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } },
  };
  const output = solc.compile(JSON.stringify(input));
  const artifact = JSON.parse(output).contracts.main[contractName];
  return {
    abi: artifact.abi,
    bytecode: artifact.evm.bytecode.object,
  };
}

main();
