// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FakeProductIdentificationSystem {
    address payable public owner;
    enum ProductEventAction {
        BUY,
        SELL
    }
    // Struct to represent product details
    struct Product {
        string name;
        uint256 productId;
        address manufacturer;
        bool isVerified;
    }

    // Mapping to store product details using product ID
    mapping(uint256 => Product) public products;

    // Event to log product verification
    event ProductVerified(uint256 productId, address verifier);
    //Event to log product action
    event ProductEvent(
        uint256 productId,
        address indexed actor,
        string action,
        string additionalInfo,
        ProductEventAction productEventAction
    );
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() payable{
        owner = payable(msg.sender);
    }

    // Function to add a new product to the system
    function addProduct(
        string memory _name,
        uint256 _productId
    ) public onlyOwner {
        require(
            products[_productId].productId == 0,
            "Product ID already exists"
        );

        Product memory newProduct = Product({
            name: _name,
            productId: _productId,
            manufacturer: msg.sender,
            isVerified: false
        });

        products[_productId] = newProduct;
    }

    // Function to verify a product's authenticity
    function verifyProduct(uint256 _productId) public {
        require(
            products[_productId].productId != 0,
            "Product ID does not exist"
        );

        // Ensure the product is not already verified
        require(
            !products[_productId].isVerified,
            "Product is already verified"
        );

        // Mark the product as verified
        products[_productId].isVerified = true;

        // Emit an event to log the verification
        emit ProductVerified(_productId, msg.sender);
    }

    // Function to get product details
    function getProductDetails(
        uint256 _productId
    ) public view returns (string memory, address, bool) {
        require(
            products[_productId].productId != 0,
            "Product ID does not exist"
        );

        Product memory product = products[_productId];
        return (product.name, product.manufacturer, product.isVerified);
    }

    //Function to sell the product to other user
    function sellProduct(
        uint256 _productId,
        address _buyer,
        uint256 _price
    ) public {
        require(
            msg.sender == products[_productId].manufacturer,
            "Only the current owner can sell the product"
        );

        // Transfer ownership to the buyer
        products[_productId].manufacturer = _buyer;

        // Emit event for the sale
        emit ProductEvent(
            _productId,
            msg.sender,
            string(abi.encode("Sell for ", abi.encodePacked(_buyer))),
            uintToString(_price),
            ProductEventAction.SELL
        );
    }

    function uintToString(
        uint256 _value
    ) internal pure returns (string memory) {
        if (_value == 0) {
            return "0";
        }

        uint256 temp = _value;
        uint256 length;

        while (temp > 0) {
            temp /= 10;
            length++;
        }

        bytes memory str = new bytes(length);
        temp = _value;

        while (length > 0) {
            str[--length] = bytes1(uint8(48 + (temp % 10)));
            temp /= 10;
        }

        return string(str);
    }

    function buyProduct(uint256 _productId) public payable {
        address seller = products[_productId].manufacturer;
        uint256 price = msg.value;
        require(seller != address(0), "Product ID does not exist");
        require(msg.sender != seller, "Buyer and seller cannot be the same");
        require(products[_productId].isVerified, "Product must be verified before purchase");


        // Check if the buyer sent enough Ether
        require(price > 0, "Price must be greater than 0");
        require(price >= 1 ether, "Minimum purchase price is 1 Ether");

        // Transfer ownership to the buyer
        products[_productId].manufacturer = msg.sender;

        // Transfer funds to the seller
        payable(seller).transfer(price);

        // Emit event for the purchase
        emit ProductEvent(
            _productId,
            msg.sender,
            string(abi.encode("From",abi.encode(seller))),
            uintToString(price),
            ProductEventAction.SELL
        );
    }
}