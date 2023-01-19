// scripts/4.prepareV4.ts
import { ethers } from "hardhat";
import { upgrades } from "hardhat";

// 本地node
// const proxyAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'

// goerli 
const proxyAddress = '0xb5a0f4fface47ab955944ece70cf3f886093ba7d'
async function main() {
  console.log(proxyAddress," original Box(proxy) address")
  const BoxV4 = await ethers.getContractFactory("BoxV4")
  console.log("Preparing upgrade to BoxV4...");
  const boxV4Address = await upgrades.prepareUpgrade(proxyAddress, BoxV4);
  console.log(boxV4Address, " BoxV4 implementation contract address")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
