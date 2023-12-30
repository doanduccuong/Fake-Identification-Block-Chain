const hre = require('hardhat');
const {ethers} = hre;
const typechain = require("../src/types");
async function main() {
  const accounts = await ethers.getSigners();
  const minter = accounts[0];
  const buyer = accounts[1];
  console.log('Prepare account');
  //deploy fake identificaiton product contract
  const system = await new typechain.Product__factory(minter).deploy(minter);
  console.log('system',system.target);
  await system.connect(minter).setApprovalForAll(system.target, true);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
