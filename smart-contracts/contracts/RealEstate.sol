// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RealEstate {
    struct Property {
        uint256 propertyId;
        address owner;
        uint256 price;
        string status; // "Available", "Sold"
    }

    uint256 public propertyCounter;
    mapping(uint256 => Property) public properties;

    // 事件
    event PropertyRegistered(uint256 propertyId, address owner, uint256 price);
    event PropertyTransferred(uint256 propertyId, address newOwner);

    // 注册房产
    function registerProperty(uint256 price) public {
        propertyCounter++;
        properties[propertyCounter] = Property(propertyCounter, msg.sender, price, "Available");

        emit PropertyRegistered(propertyCounter, msg.sender, price);
    }

    // 转移所有权
    function transferProperty(uint256 propertyId, address newOwner) public {
        Property storage property = properties[propertyId];
        require(msg.sender == property.owner, "Only the owner can transfer this property");
        require(keccak256(abi.encodePacked(property.status)) == keccak256(abi.encodePacked("Available")), "Property not available");

        property.owner = newOwner;
        property.status = "Sold";

        emit PropertyTransferred(propertyId, newOwner);
    }

    // 查询房产信息
    function getProperty(uint256 propertyId) public view returns (Property memory) {
        return properties[propertyId];
    }
}
