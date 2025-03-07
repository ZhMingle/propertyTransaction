const { expect } = require("chai");

describe("RealEstate", function () {
    it("Should register and transfer property", async function () {
        const RealEstate = await ethers.getContractFactory("RealEstate");
        const realEstate = await RealEstate.deploy();
        await realEstate.deployed();

        // 注册房产
        await realEstate.registerProperty(1000);
        let property = await realEstate.properties(1);
        expect(property.price).to.equal(1000);

        // 转移房产所有权
        const [owner, newOwner] = await ethers.getSigners();
        await realEstate.transferProperty(1, newOwner.address);
        property = await realEstate.properties(1);
        expect(property.owner).to.equal(newOwner.address);
    });
});
