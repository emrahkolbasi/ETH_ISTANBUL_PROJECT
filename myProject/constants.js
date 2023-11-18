export const contractAddress = "00x5FbDB2315678afecb367f032d93F642f64180aa3"
export const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "hirer",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Owner",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "adressOfProperty",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "rentingID",
              "type": "uint256"
            },
            {
              "internalType": "enum rent.RentType",
              "name": "rentType",
              "type": "uint8"
            }
          ],
          "internalType": "struct rent.rentData",
          "name": "_rentData",
          "type": "tuple"
        }
      ],
      "name": "endIt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "hirer",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Owner",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "adressOfProperty",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "rentingID",
              "type": "uint256"
            },
            {
              "internalType": "enum rent.RentType",
              "name": "rentType",
              "type": "uint8"
            }
          ],
          "internalType": "struct rent.rentData",
          "name": "_rentData",
          "type": "tuple"
        },
        {
          "internalType": "string",
          "name": "_start",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_end",
          "type": "string"
        }
      ],
      "name": "rentIt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rentList",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isRented",
          "type": "bool"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "hirer",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Owner",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "adressOfProperty",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "rentingID",
              "type": "uint256"
            },
            {
              "internalType": "enum rent.RentType",
              "name": "rentType",
              "type": "uint8"
            }
          ],
          "internalType": "struct rent.rentData",
          "name": "newrentData",
          "type": "tuple"
        },
        {
          "internalType": "string",
          "name": "start",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "end",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]