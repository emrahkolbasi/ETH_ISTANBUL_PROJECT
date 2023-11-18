// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.8;

contract rent {


    address public owner; 

    constructor () {
        owner = msg.sender;
    }

    enum RentType {
        home,
        store
    }

    struct rentData {
        string hirer;
        string Owner;
        string adressOfProperty;
        uint rentingID;
        RentType rentType;
    }


    struct rental_agreement {
        bool isRented;
        rentData newrentData;
        string start;
        string end;
    }

    mapping (address => mapping (uint => rental_agreement)) public rentList;

    // function addProperty(rentData memory _rentData) public {
    //     rentList[msg.sender][_rentData.rentingID] =rental_agreement(false, _rentData, "start", "end");
    // }

    function rentIt(rentData memory _rentData, string memory _start, string memory _end )  public  {
        require(rentList[msg.sender][_rentData.rentingID].isRented == false, "It is already rented!");

        rentList[msg.sender][_rentData.rentingID].isRented= true;
        rentList[msg.sender][_rentData.rentingID].newrentData = _rentData;
        rentList[msg.sender][_rentData.rentingID].start = _start;
        rentList[msg.sender][_rentData.rentingID].end =  _end;
    }

    function endIt(rentData memory _rentData)  public {
        require(rentList[msg.sender][_rentData.rentingID].isRented == true, "It cannot be rented");

        rentList[msg.sender][_rentData.rentingID].isRented = false;
        rentList[msg.sender][_rentData.rentingID].start = " ";
        rentList[msg.sender][_rentData.rentingID].end =  " ";
    }

}