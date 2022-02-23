require('dotenv').config();

async function main() {
  const { API_URL } = process.env;
  const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
  const web3 = createAlchemyWeb3(API_URL);
  const blockNumber = await web3.eth.getBlockNumber();
  console.log('The latest block number is ' + blockNumber);
};

main();
