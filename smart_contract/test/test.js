const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const typechain = require("../src/types");

describe("FakeProductIdentificationSystem", function () {
  async function prepare() {
    const accounts = await ethers.getSigners();
    const seller = accounts[0];
    const buyer = accounts[1];
    const system = await new typechain.FakeProductIdentificationSystem__factory(seller).deploy();
    const system2 = await new typechain.Product__factory(seller).deploy(seller);

    console.log('Signer seller address: ', seller.address);
    console.log('Signer buyer address: ', buyer.address);

    return { seller, buyer, system ,system2};
  }
  //Deployment testing
  it("Should deploy and set the owner correctly", async function () {
    const { seller, buyer, system ,system2} = await loadFixture(prepare);
    // expect(await system.owner()).to.equal(seller.address);
    await system2.addProduct(
      "0x4920686176652031303021000000000000000000000000000000000000000000",
      "0x4920686176652031303021000000000000000000000000000000000000000000",
      "0x4920686176652031303021000000000000000000000000000000000000000000",
      "0x4920686176652031303021000000000000000000000000000000000000000000",
      1,
  );
  });

  //Add product testing
  it("Should add product correctly", async function () {
    const { seller, buyer, system } = await loadFixture(prepare);
    expect(await system.addProduct("TestProductName", 1));
  });

  //Verify product testing
  it("Should verify product correctly", async function () {
    const { seller, buyer, system } = await loadFixture(prepare);
    expect(system.verifyProduct(1));
  });

  //Get product detail testing
  it("Should get product detail correctly", async function () {
    const { seller, buyer, system } = await loadFixture(prepare);
    expect(system.getProductDetails(1));
  });

  //Sell product testing
  it("Should sell product correctly", async function () {
    const { seller, buyer, system } = await loadFixture(prepare);
    expect(system.sellProduct(1, buyer, 1));
  });

  //Buy product testing
  it("Should buy product correctly", async function () {
    const { seller, buyer, system } = await loadFixture(prepare);
    expect(system.buyProduct(1));
  });


});
describe("ProductSystem", function () {
  async function prepare() {
    const accounts = await ethers.getSigners();
    const owner = accounts[0];
    const system = await new typechain.Product__factory(owner).deploy(owner);
    console.log('Signer owner address: ', owner.address);

    return { owner, system };
  }
  //Deployment testing
  it("Should deploy and set the owner correctly", async function () {
    const { owner, system } = await loadFixture(prepare);
    expect(await system.owner()).to.equal(owner.address);
  });
});
