const { nodeKey, mnemonic} = require('./secrets.json');

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-etherscan';

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${nodeKey}`,
      accounts: {mnemonic: mnemonic}
    }
  }
};

export default config;
