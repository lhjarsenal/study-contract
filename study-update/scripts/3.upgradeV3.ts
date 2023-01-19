// scripts/3.upgradeV3.ts
import { ethers } from "hardhat";
import { upgrades } from "hardhat";

// 本地node
// const proxyAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'

// goerli 
const proxyAddress = '0xb5a0f4fface47ab955944ece70cf3f886093ba7d'

async function main() {
  console.log(proxyAddress," original Box(proxy) address")
  const BoxV3 = await ethers.getContractFactory("BoxV3")
  console.log("upgrade to BoxV3...")
  const boxV3 = await upgrades.upgradeProxy(proxyAddress, BoxV3)
  console.log(boxV3.address," BoxV3 address(should be the same)")

  console.log(await upgrades.erc1967.getImplementationAddress(boxV3.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(boxV3.address), " getAdminAddress")    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
