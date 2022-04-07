/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-truffle5");

const { alchemyApiKey, privateKey } = require('./secrets.json');

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [`0x${privateKey}`]
    },
  },
};
