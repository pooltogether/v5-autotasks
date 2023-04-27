import { ContractsBlob } from "./types";

// 20230427105133
// https://raw.githubusercontent.com/pooltogether/v5-testnet/17a5a676f125dbaa9f84bcc6f566b1b21f165c65/deployments/ethGoerli/contracts.json

export const testnetContractsBlob: ContractsBlob = {
  name: "Hyperstructure Testnet",
  version: {
    major: 1,
    minor: 0,
    patch: 0
  },
  timestamp: "2023-04-26T22:20:49.807Z",
  contracts: [
    {
      chainId: 5,
      address: "0x16010bbb01aa2283Ec5dAa59AFBbd44536C8f634",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "MarketRate",
      abi: [
        {
          inputs: [
            {
              internalType: "uint8",
              name: "decimals_",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            },
            {
              internalType: "string",
              name: "_denominator",
              type: "string"
            }
          ],
          name: "getPrice",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          name: "priceFeed",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            },
            {
              internalType: "string",
              name: "_denominator",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "_price",
              type: "uint256"
            }
          ],
          name: "setPrice",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "_tokens",
              type: "address[]"
            },
            {
              internalType: "string",
              name: "_denominator",
              type: "string"
            },
            {
              internalType: "uint256[]",
              name: "_prices",
              type: "uint256[]"
            }
          ],
          name: "setPriceBatch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x6e65eE4F471945Bd3A98F9d958216Cf1B1c61229",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "TokenFaucet",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_token",
              type: "address"
            }
          ],
          name: "drip",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xEF8743fb2f5bEa4a6e6e821895D479042A9Bb5ca",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "ERC20Mintable",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "uint8",
              name: "decimals_",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "burn",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "masterTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x62a918876ad2135bdcD35149c9787311D4417912",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "ERC20Mintable",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "uint8",
              name: "decimals_",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "burn",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "masterTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x1D0cdE537D5Ee72fB43a16027874626dd82741F3",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "ERC20Mintable",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "uint8",
              name: "decimals_",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "burn",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "masterTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x6bC6556e16654F72C097F6863418926510Aa3006",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "ERC20Mintable",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "uint8",
              name: "decimals_",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "burn",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "masterTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xe86425cfb3A55e9EB1D5F2A79F6b583e94921071",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "ERC20Mintable",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "uint8",
              name: "decimals_",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "burn",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "masterTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x77C4F17Acf61C3B5983a3Fb8BaCBDE899998CC0B",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "ERC20Mintable",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "uint8",
              name: "decimals_",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "burn",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "masterTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xc4a7A720912dc744FBCd0DACAc9B783334a49eD6",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "TwabController",
      abi: [
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_overwriteFrequency",
              type: "uint32"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "amount",
              type: "uint112"
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "delegateAmount",
              type: "uint112"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isNew",
              type: "bool"
            },
            {
              components: [
                {
                  internalType: "uint224",
                  name: "amount",
                  type: "uint224"
                },
                {
                  internalType: "uint32",
                  name: "timestamp",
                  type: "uint32"
                }
              ],
              indexed: false,
              internalType: "struct ObservationLib.Observation",
              name: "twab",
              type: "tuple"
            }
          ],
          name: "DecreasedBalance",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "amount",
              type: "uint112"
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "delegateAmount",
              type: "uint112"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isNew",
              type: "bool"
            },
            {
              components: [
                {
                  internalType: "uint224",
                  name: "amount",
                  type: "uint224"
                },
                {
                  internalType: "uint32",
                  name: "timestamp",
                  type: "uint32"
                }
              ],
              indexed: false,
              internalType: "struct ObservationLib.Observation",
              name: "twab",
              type: "tuple"
            }
          ],
          name: "DecreasedTotalSupply",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "delegator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "delegate",
              type: "address"
            }
          ],
          name: "Delegated",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "amount",
              type: "uint112"
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "delegateAmount",
              type: "uint112"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isNew",
              type: "bool"
            },
            {
              components: [
                {
                  internalType: "uint224",
                  name: "amount",
                  type: "uint224"
                },
                {
                  internalType: "uint32",
                  name: "timestamp",
                  type: "uint32"
                }
              ],
              indexed: false,
              internalType: "struct ObservationLib.Observation",
              name: "twab",
              type: "tuple"
            }
          ],
          name: "IncreasedBalance",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "amount",
              type: "uint112"
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "delegateAmount",
              type: "uint112"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isNew",
              type: "bool"
            },
            {
              components: [
                {
                  internalType: "uint224",
                  name: "amount",
                  type: "uint224"
                },
                {
                  internalType: "uint32",
                  name: "timestamp",
                  type: "uint32"
                }
              ],
              indexed: false,
              internalType: "struct ObservationLib.Observation",
              name: "twab",
              type: "tuple"
            }
          ],
          name: "IncreasedTotalSupply",
          type: "event"
        },
        {
          inputs: [],
          name: "SPONSORSHIP_ADDRESS",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            }
          ],
          name: "delegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "delegateBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "delegateOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "getAccount",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint112",
                      name: "balance",
                      type: "uint112"
                    },
                    {
                      internalType: "uint112",
                      name: "delegateBalance",
                      type: "uint112"
                    },
                    {
                      internalType: "uint16",
                      name: "nextTwabIndex",
                      type: "uint16"
                    },
                    {
                      internalType: "uint16",
                      name: "cardinality",
                      type: "uint16"
                    }
                  ],
                  internalType: "struct TwabLib.AccountDetails",
                  name: "details",
                  type: "tuple"
                },
                {
                  components: [
                    {
                      internalType: "uint224",
                      name: "amount",
                      type: "uint224"
                    },
                    {
                      internalType: "uint32",
                      name: "timestamp",
                      type: "uint32"
                    }
                  ],
                  internalType: "struct ObservationLib.Observation[365]",
                  name: "twabs",
                  type: "tuple[365]"
                }
              ],
              internalType: "struct TwabLib.Account",
              name: "",
              type: "tuple"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              internalType: "uint32",
              name: "startTime",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "endTime",
              type: "uint32"
            }
          ],
          name: "getAverageBalanceBetween",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "uint32",
              name: "startTime",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "endTime",
              type: "uint32"
            }
          ],
          name: "getAverageTotalSupplyBetween",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              internalType: "uint32",
              name: "targetTime",
              type: "uint32"
            }
          ],
          name: "getBalanceAt",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "getNewestTwab",
          outputs: [
            {
              internalType: "uint16",
              name: "index",
              type: "uint16"
            },
            {
              components: [
                {
                  internalType: "uint224",
                  name: "amount",
                  type: "uint224"
                },
                {
                  internalType: "uint32",
                  name: "timestamp",
                  type: "uint32"
                }
              ],
              internalType: "struct ObservationLib.Observation",
              name: "twab",
              type: "tuple"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "user",
              type: "address"
            }
          ],
          name: "getOldestTwab",
          outputs: [
            {
              internalType: "uint16",
              name: "index",
              type: "uint16"
            },
            {
              components: [
                {
                  internalType: "uint224",
                  name: "amount",
                  type: "uint224"
                },
                {
                  internalType: "uint32",
                  name: "timestamp",
                  type: "uint32"
                }
              ],
              internalType: "struct ObservationLib.Observation",
              name: "twab",
              type: "tuple"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              internalType: "uint32",
              name: "targetTime",
              type: "uint32"
            }
          ],
          name: "getTotalSupplyAt",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "overwriteFrequency",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_from",
              type: "address"
            }
          ],
          name: "sponsor",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            }
          ],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "vault",
              type: "address"
            }
          ],
          name: "totalSupplyDelegateBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_from",
              type: "address"
            },
            {
              internalType: "uint112",
              name: "_amount",
              type: "uint112"
            }
          ],
          name: "twabBurn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint112",
              name: "_amount",
              type: "uint112"
            }
          ],
          name: "twabMint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_from",
              type: "address"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint112",
              name: "_amount",
              type: "uint112"
            }
          ],
          name: "twabTransfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x3de3ddb0B06701a586a704E9e808a77a89f9bA14",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "PrizePool",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_prizeToken",
              type: "address"
            },
            {
              internalType: "contract TwabController",
              name: "_twabController",
              type: "address"
            },
            {
              internalType: "uint32",
              name: "_grandPrizePeriodDraws",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "_drawPeriodSeconds",
              type: "uint32"
            },
            {
              internalType: "uint64",
              name: "nextDrawStartsAt_",
              type: "uint64"
            },
            {
              internalType: "uint8",
              name: "_numberOfTiers",
              type: "uint8"
            },
            {
              internalType: "uint96",
              name: "_tierShares",
              type: "uint96"
            },
            {
              internalType: "uint96",
              name: "_canaryShares",
              type: "uint96"
            },
            {
              internalType: "uint96",
              name: "_reserveShares",
              type: "uint96"
            },
            {
              internalType: "UD2x18",
              name: "_claimExpansionThreshold",
              type: "uint64"
            },
            {
              internalType: "SD1x18",
              name: "_smoothing",
              type: "int64"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "requested",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "available",
              type: "uint256"
            }
          ],
          name: "InsufficientRewardsError",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "x",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "y",
              type: "uint256"
            }
          ],
          name: "PRBMath_MulDiv18_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "x",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "y",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "denominator",
              type: "uint256"
            }
          ],
          name: "PRBMath_MulDiv_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "SD59x18",
              name: "x",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Ceil_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "int256",
              name: "x",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Convert_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "int256",
              name: "x",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Convert_Underflow",
          type: "error"
        },
        {
          inputs: [],
          name: "PRBMath_SD59x18_Div_InputTooSmall",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "SD59x18",
              name: "x",
              type: "int256"
            },
            {
              internalType: "SD59x18",
              name: "y",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Div_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "SD59x18",
              name: "x",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Exp2_InputTooBig",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "SD59x18",
              name: "x",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Log_InputTooSmall",
          type: "error"
        },
        {
          inputs: [],
          name: "PRBMath_SD59x18_Mul_InputTooSmall",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "SD59x18",
              name: "x",
              type: "int256"
            },
            {
              internalType: "SD59x18",
              name: "y",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Mul_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "x",
              type: "uint256"
            }
          ],
          name: "PRBMath_UD60x18_Convert_Overflow",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint32",
              name: "drawId",
              type: "uint32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "vault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "winner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "tier",
              type: "uint8"
            },
            {
              indexed: false,
              internalType: "uint152",
              name: "payout",
              type: "uint152"
            },
            {
              indexed: false,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint96",
              name: "fee",
              type: "uint96"
            },
            {
              indexed: false,
              internalType: "address",
              name: "feeRecipient",
              type: "address"
            }
          ],
          name: "ClaimedPrize",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousManager",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newManager",
              type: "address"
            }
          ],
          name: "ManagerTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address"
            }
          ],
          name: "OwnershipOffered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_claimer",
              type: "address"
            }
          ],
          name: "balanceOfClaimRewards",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            }
          ],
          name: "calculatePrizeSize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            }
          ],
          name: "calculateTierTwabTimestamps",
          outputs: [
            {
              internalType: "uint64",
              name: "startTimestamp",
              type: "uint64"
            },
            {
              internalType: "uint64",
              name: "endTimestamp",
              type: "uint64"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "canaryClaimCount",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_numTiers",
              type: "uint8"
            }
          ],
          name: "canaryPrizeCount",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "canaryPrizeCount",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "numTiers",
              type: "uint8"
            }
          ],
          name: "canaryPrizeCountFractional",
          outputs: [
            {
              internalType: "UD60x18",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "canaryShares",
          outputs: [
            {
              internalType: "uint96",
              name: "",
              type: "uint96"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimCount",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimExpansionThreshold",
          outputs: [
            {
              internalType: "UD2x18",
              name: "",
              type: "uint64"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_winner",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint96",
              name: "_fee",
              type: "uint96"
            },
            {
              internalType: "address",
              name: "_feeRecipient",
              type: "address"
            }
          ],
          name: "claimPrize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "winningRandomNumber_",
              type: "uint256"
            }
          ],
          name: "completeAndStartNextDraw",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_prizeVault",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256"
            }
          ],
          name: "contributePrizeTokens",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "drawPeriodSeconds",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "numTiers",
              type: "uint8"
            }
          ],
          name: "estimatedPrizeCount",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "estimatedPrizeCount",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_vault",
              type: "address"
            },
            {
              internalType: "uint32",
              name: "_startDrawIdInclusive",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "_endDrawIdInclusive",
              type: "uint32"
            }
          ],
          name: "getContributedBetween",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getLastCompletedDrawId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getNextDrawId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            }
          ],
          name: "getTierAccrualDurationInDraws",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            }
          ],
          name: "getTierLiquidity",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            }
          ],
          name: "getTierPrizeCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "pure",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_startDrawIdInclusive",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "_endDrawIdInclusive",
              type: "uint32"
            }
          ],
          name: "getTotalContributedBetween",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getTotalShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_vault",
              type: "address"
            },
            {
              internalType: "uint32",
              name: "startDrawId",
              type: "uint32"
            },
            {
              internalType: "uint32",
              name: "endDrawId",
              type: "uint32"
            }
          ],
          name: "getVaultPortion",
          outputs: [
            {
              internalType: "SD59x18",
              name: "",
              type: "int256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "_user",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_drawDuration",
              type: "uint256"
            }
          ],
          name: "getVaultUserBalanceAndTotalSupplyTwab",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getWinningRandomNumber",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "grandPrizePeriodDraws",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "hasNextDrawFinished",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_vault",
              type: "address"
            },
            {
              internalType: "address",
              name: "_user",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            }
          ],
          name: "isWinner",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "largestTierClaimed",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "lastCompletedDrawStartedAt",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "manager",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes[]",
              name: "data",
              type: "bytes[]"
            }
          ],
          name: "multicall",
          outputs: [
            {
              internalType: "bytes[]",
              name: "results",
              type: "bytes[]"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "nextDrawEndsAt",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "nextDrawStartsAt",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "numberOfTiers",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizeToken",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizeTokenPerShare",
          outputs: [
            {
              internalType: "UD60x18",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "reserve",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "reserveShares",
          outputs: [
            {
              internalType: "uint96",
              name: "",
              type: "uint96"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newManager",
              type: "address"
            }
          ],
          name: "setManager",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "smoothing",
          outputs: [
            {
              internalType: "SD1x18",
              name: "",
              type: "int64"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "tierShares",
          outputs: [
            {
              internalType: "uint96",
              name: "",
              type: "uint96"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalDrawLiquidity",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "twabController",
          outputs: [
            {
              internalType: "contract TwabController",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256"
            }
          ],
          name: "withdrawClaimRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256"
            }
          ],
          name: "withdrawReserve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x846B805982A20530f700EfC57b0278Dd5b15fC8D",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "Claimer",
      abi: [
        {
          inputs: [
            {
              internalType: "contract PrizePool",
              name: "_prizePool",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_minimumFee",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "_maximumFee",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "_timeToReachMaxFee",
              type: "uint256"
            },
            {
              internalType: "UD2x18",
              name: "_maxFeePortionOfPrize",
              type: "uint64"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "DrawInvalid",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "x",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "y",
              type: "uint256"
            }
          ],
          name: "PRBMath_MulDiv18_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "x",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "y",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "denominator",
              type: "uint256"
            }
          ],
          name: "PRBMath_MulDiv_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "int256",
              name: "x",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Convert_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "int256",
              name: "x",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Convert_Underflow",
          type: "error"
        },
        {
          inputs: [],
          name: "PRBMath_SD59x18_Div_InputTooSmall",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "SD59x18",
              name: "x",
              type: "int256"
            },
            {
              internalType: "SD59x18",
              name: "y",
              type: "int256"
            }
          ],
          name: "PRBMath_SD59x18_Div_Overflow",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "drawId",
              type: "uint256"
            },
            {
              components: [
                {
                  internalType: "contract IVault",
                  name: "vault",
                  type: "address"
                },
                {
                  internalType: "address",
                  name: "winner",
                  type: "address"
                },
                {
                  internalType: "uint8",
                  name: "tier",
                  type: "uint8"
                }
              ],
              internalType: "struct Claim[]",
              name: "_claims",
              type: "tuple[]"
            },
            {
              internalType: "address",
              name: "_feeRecipient",
              type: "address"
            }
          ],
          name: "claimPrizes",
          outputs: [
            {
              internalType: "uint256",
              name: "claimCount",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalFees",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "computeMaxFee",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decayConstant",
          outputs: [
            {
              internalType: "SD59x18",
              name: "",
              type: "int256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "maxFeePortionOfPrize",
          outputs: [
            {
              internalType: "UD2x18",
              name: "",
              type: "uint64"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "minimumFee",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes[]",
              name: "data",
              type: "bytes[]"
            }
          ],
          name: "multicall",
          outputs: [
            {
              internalType: "bytes[]",
              name: "results",
              type: "bytes[]"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "prizePool",
          outputs: [
            {
              internalType: "contract PrizePool",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xEDfe083B96179618C06093602DC8A9C560BC97a1",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationPairFactory",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPair",
              name: "liquidator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract ILiquidationSource",
              name: "source",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenIn",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenOut",
              type: "address"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "swapMultiplier",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "liquidityFraction",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveIn",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveOut",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minK",
              type: "uint256"
            }
          ],
          name: "PairCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "allPairs",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract ILiquidationSource",
              name: "_source",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "UFixed32x4",
              name: "_swapMultiplier",
              type: "uint32"
            },
            {
              internalType: "UFixed32x4",
              name: "_liquidityFraction",
              type: "uint32"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveIn",
              type: "uint128"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveOut",
              type: "uint128"
            },
            {
              internalType: "uint256",
              name: "_mink",
              type: "uint256"
            }
          ],
          name: "createPair",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          name: "deployedPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalPairs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xA79905F4e1942299dc165ADf5C7a8fCa169501ea",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationRouter",
      abi: [
        {
          inputs: [
            {
              internalType: "contract LiquidationPairFactory",
              name: "liquidationPairFactory_",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPairFactory",
              name: "liquidationPairFactory",
              type: "address"
            }
          ],
          name: "LiquidationRouterCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "_liquidationPair",
              type: "address"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "_amountOutMin",
              type: "uint256"
            }
          ],
          name: "swapExactAmountIn",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "_liquidationPair",
              type: "address"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountOut",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "_amountInMax",
              type: "uint256"
            }
          ],
          name: "swapExactAmountOut",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xc19Aa2898df67092b8e9a64f1f8d856380651c70",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "YieldVault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ERC20Mintable",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "lastYieldTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "mintRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "ratePerSecond",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ratePerSecond",
              type: "uint256"
            }
          ],
          name: "setRatePerSecond",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "yield",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x366C1f36D145B20f6c014B78AF07Ca20937BE368",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "YieldVault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ERC20Mintable",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "lastYieldTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "mintRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "ratePerSecond",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ratePerSecond",
              type: "uint256"
            }
          ],
          name: "setRatePerSecond",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "yield",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x3315e649449785e85cB1bA47c36012F63b63F3d2",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "YieldVault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ERC20Mintable",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "lastYieldTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "mintRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "ratePerSecond",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ratePerSecond",
              type: "uint256"
            }
          ],
          name: "setRatePerSecond",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "yield",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x3957Db9d0edDF953b09e9083797A654FE012584d",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "YieldVault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ERC20Mintable",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "lastYieldTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "mintRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "ratePerSecond",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ratePerSecond",
              type: "uint256"
            }
          ],
          name: "setRatePerSecond",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "yield",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xb84dC762c9B574D07238Fd6CE995297d12b92AE7",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "YieldVault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ERC20Mintable",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "lastYieldTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "mintRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "ratePerSecond",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ratePerSecond",
              type: "uint256"
            }
          ],
          name: "setRatePerSecond",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "yield",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x8e181F1ca0301604d073cAcae69afB980bc63023",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "YieldVault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ERC20Mintable",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "lastYieldTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "mintRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "ratePerSecond",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ratePerSecond",
              type: "uint256"
            }
          ],
          name: "setRatePerSecond",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "yield",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xb13A0B709990908B07739b4f371c7F3DfEAd2296",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "YieldVault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ERC20Mintable",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MINTER_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            }
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "hasRole",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "lastYieldTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "mintRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "ratePerSecond",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              internalType: "address",
              name: "account",
              type: "address"
            }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ratePerSecond",
              type: "uint256"
            }
          ],
          name: "setRatePerSecond",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4"
            }
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "yield",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x88AF6D939dBf71f3BEEf90027eA3Cde5aC6c1451",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "Vault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "contract TwabController",
              name: "_twabController",
              type: "address"
            },
            {
              internalType: "contract IERC4626",
              name: "_yieldVault",
              type: "address"
            },
            {
              internalType: "contract PrizePool",
              name: "_prizePool",
              type: "address"
            },
            {
              internalType: "contract Claimer",
              name: "_claimer",
              type: "address"
            },
            {
              internalType: "address",
              name: "_yieldFeeRecipient",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_yieldFeePercentage",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string"
            }
          ],
          name: "StringTooLong",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool"
            }
          ],
          name: "AutoClaimDisabled",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "previousClaimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "newClaimer",
              type: "address"
            }
          ],
          name: "ClaimerSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract LiquidationPair",
              name: "newLiquidationPair",
              type: "address"
            }
          ],
          name: "LiquidationPairSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "MintYieldFee",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC20",
              name: "asset",
              type: "address"
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              indexed: false,
              internalType: "contract TwabController",
              name: "twabController",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract IERC4626",
              name: "yieldVault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract PrizePool",
              name: "prizePool",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "claimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "yieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "yieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "NewVault",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address"
            }
          ],
          name: "OwnershipOffered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Sponsor",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "previousYieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newYieldFeePercentage",
              type: "uint256"
            }
          ],
          name: "YieldFeePercentageSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousYieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "newYieldFeeRecipient",
              type: "address"
            }
          ],
          name: "YieldFeeRecipientSet",
          type: "event"
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "autoClaimDisabled",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "availableBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldFeeBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_winner",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint96",
              name: "_claimFee",
              type: "uint96"
            },
            {
              internalType: "address",
              name: "_claimFeeRecipient",
              type: "address"
            }
          ],
          name: "claimPrize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "claimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "depositWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "_disable",
              type: "bool"
            }
          ],
          name: "disableAutoClaim",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "version",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32"
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "exchangeRate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "isVaultCollateralized",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountOut",
              type: "uint256"
            }
          ],
          name: "liquidate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "liquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "mintWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_recipient",
              type: "address"
            }
          ],
          name: "mintYieldFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32"
            }
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizePool",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract Claimer",
              name: "claimer_",
              type: "address"
            }
          ],
          name: "setClaimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "liquidationPair_",
              type: "address"
            }
          ],
          name: "setLiquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "yieldFeePercentage_",
              type: "uint256"
            }
          ],
          name: "setYieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "yieldFeeRecipient_",
              type: "address"
            }
          ],
          name: "setYieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "sponsor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "sponsorWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "targetOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "twabController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeTotalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldVault",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      tokens: [
        {
          chainId: 5,
          address: "0x88AF6D939dBf71f3BEEf90027eA3Cde5aC6c1451",
          name: "PoolTogether Dai Stablecoin Low Yield Prize Token",
          decimals: 18,
          symbol: "PTDAILYT",
          extensions: {
            underlyingAsset: {
              address: "0xEF8743fb2f5bEa4a6e6e821895D479042A9Bb5ca",
              symbol: "DAI",
              name: "Dai Stablecoin"
            }
          }
        }
      ]
    },
    {
      chainId: 5,
      address: "0x9921C57a524baD487806557F2D39E78CB9bE7e34",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationPairFactory",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPair",
              name: "liquidator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract ILiquidationSource",
              name: "source",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenIn",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenOut",
              type: "address"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "swapMultiplier",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "liquidityFraction",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveIn",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveOut",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minK",
              type: "uint256"
            }
          ],
          name: "PairCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "allPairs",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract ILiquidationSource",
              name: "_source",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "UFixed32x4",
              name: "_swapMultiplier",
              type: "uint32"
            },
            {
              internalType: "UFixed32x4",
              name: "_liquidityFraction",
              type: "uint32"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveIn",
              type: "uint128"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveOut",
              type: "uint128"
            },
            {
              internalType: "uint256",
              name: "_mink",
              type: "uint256"
            }
          ],
          name: "createPair",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          name: "deployedPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalPairs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xb9FA091346E7eeb3da7e207194e7EE70a89858e9",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "Vault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "contract TwabController",
              name: "_twabController",
              type: "address"
            },
            {
              internalType: "contract IERC4626",
              name: "_yieldVault",
              type: "address"
            },
            {
              internalType: "contract PrizePool",
              name: "_prizePool",
              type: "address"
            },
            {
              internalType: "contract Claimer",
              name: "_claimer",
              type: "address"
            },
            {
              internalType: "address",
              name: "_yieldFeeRecipient",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_yieldFeePercentage",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string"
            }
          ],
          name: "StringTooLong",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool"
            }
          ],
          name: "AutoClaimDisabled",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "previousClaimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "newClaimer",
              type: "address"
            }
          ],
          name: "ClaimerSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract LiquidationPair",
              name: "newLiquidationPair",
              type: "address"
            }
          ],
          name: "LiquidationPairSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "MintYieldFee",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC20",
              name: "asset",
              type: "address"
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              indexed: false,
              internalType: "contract TwabController",
              name: "twabController",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract IERC4626",
              name: "yieldVault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract PrizePool",
              name: "prizePool",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "claimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "yieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "yieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "NewVault",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address"
            }
          ],
          name: "OwnershipOffered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Sponsor",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "previousYieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newYieldFeePercentage",
              type: "uint256"
            }
          ],
          name: "YieldFeePercentageSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousYieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "newYieldFeeRecipient",
              type: "address"
            }
          ],
          name: "YieldFeeRecipientSet",
          type: "event"
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "autoClaimDisabled",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "availableBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldFeeBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_winner",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint96",
              name: "_claimFee",
              type: "uint96"
            },
            {
              internalType: "address",
              name: "_claimFeeRecipient",
              type: "address"
            }
          ],
          name: "claimPrize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "claimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "depositWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "_disable",
              type: "bool"
            }
          ],
          name: "disableAutoClaim",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "version",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32"
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "exchangeRate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "isVaultCollateralized",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountOut",
              type: "uint256"
            }
          ],
          name: "liquidate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "liquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "mintWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_recipient",
              type: "address"
            }
          ],
          name: "mintYieldFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32"
            }
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizePool",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract Claimer",
              name: "claimer_",
              type: "address"
            }
          ],
          name: "setClaimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "liquidationPair_",
              type: "address"
            }
          ],
          name: "setLiquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "yieldFeePercentage_",
              type: "uint256"
            }
          ],
          name: "setYieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "yieldFeeRecipient_",
              type: "address"
            }
          ],
          name: "setYieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "sponsor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "sponsorWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "targetOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "twabController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeTotalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldVault",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      tokens: [
        {
          chainId: 5,
          address: "0xb9FA091346E7eeb3da7e207194e7EE70a89858e9",
          name: "PoolTogether Dai Stablecoin High Yield Prize Token",
          decimals: 18,
          symbol: "PTDAIHYT",
          extensions: {
            underlyingAsset: {
              address: "0xEF8743fb2f5bEa4a6e6e821895D479042A9Bb5ca",
              symbol: "DAI",
              name: "Dai Stablecoin"
            }
          }
        }
      ]
    },
    {
      chainId: 5,
      address: "0xC81508D86B703032a0a89b2A8799644028643927",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationPairFactory",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPair",
              name: "liquidator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract ILiquidationSource",
              name: "source",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenIn",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenOut",
              type: "address"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "swapMultiplier",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "liquidityFraction",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveIn",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveOut",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minK",
              type: "uint256"
            }
          ],
          name: "PairCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "allPairs",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract ILiquidationSource",
              name: "_source",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "UFixed32x4",
              name: "_swapMultiplier",
              type: "uint32"
            },
            {
              internalType: "UFixed32x4",
              name: "_liquidityFraction",
              type: "uint32"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveIn",
              type: "uint128"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveOut",
              type: "uint128"
            },
            {
              internalType: "uint256",
              name: "_mink",
              type: "uint256"
            }
          ],
          name: "createPair",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          name: "deployedPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalPairs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x0f91A5e5d59D2c8691FdA9c39285b42da5e7178C",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "Vault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "contract TwabController",
              name: "_twabController",
              type: "address"
            },
            {
              internalType: "contract IERC4626",
              name: "_yieldVault",
              type: "address"
            },
            {
              internalType: "contract PrizePool",
              name: "_prizePool",
              type: "address"
            },
            {
              internalType: "contract Claimer",
              name: "_claimer",
              type: "address"
            },
            {
              internalType: "address",
              name: "_yieldFeeRecipient",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_yieldFeePercentage",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string"
            }
          ],
          name: "StringTooLong",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool"
            }
          ],
          name: "AutoClaimDisabled",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "previousClaimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "newClaimer",
              type: "address"
            }
          ],
          name: "ClaimerSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract LiquidationPair",
              name: "newLiquidationPair",
              type: "address"
            }
          ],
          name: "LiquidationPairSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "MintYieldFee",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC20",
              name: "asset",
              type: "address"
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              indexed: false,
              internalType: "contract TwabController",
              name: "twabController",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract IERC4626",
              name: "yieldVault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract PrizePool",
              name: "prizePool",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "claimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "yieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "yieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "NewVault",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address"
            }
          ],
          name: "OwnershipOffered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Sponsor",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "previousYieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newYieldFeePercentage",
              type: "uint256"
            }
          ],
          name: "YieldFeePercentageSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousYieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "newYieldFeeRecipient",
              type: "address"
            }
          ],
          name: "YieldFeeRecipientSet",
          type: "event"
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "autoClaimDisabled",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "availableBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldFeeBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_winner",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint96",
              name: "_claimFee",
              type: "uint96"
            },
            {
              internalType: "address",
              name: "_claimFeeRecipient",
              type: "address"
            }
          ],
          name: "claimPrize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "claimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "depositWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "_disable",
              type: "bool"
            }
          ],
          name: "disableAutoClaim",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "version",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32"
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "exchangeRate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "isVaultCollateralized",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountOut",
              type: "uint256"
            }
          ],
          name: "liquidate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "liquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "mintWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_recipient",
              type: "address"
            }
          ],
          name: "mintYieldFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32"
            }
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizePool",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract Claimer",
              name: "claimer_",
              type: "address"
            }
          ],
          name: "setClaimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "liquidationPair_",
              type: "address"
            }
          ],
          name: "setLiquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "yieldFeePercentage_",
              type: "uint256"
            }
          ],
          name: "setYieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "yieldFeeRecipient_",
              type: "address"
            }
          ],
          name: "setYieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "sponsor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "sponsorWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "targetOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "twabController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeTotalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldVault",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      tokens: [
        {
          chainId: 5,
          address: "0x0f91A5e5d59D2c8691FdA9c39285b42da5e7178C",
          name: "PoolTogether USD Coin Low Yield Prize Token",
          decimals: 6,
          symbol: "PTUSDCLYT",
          extensions: {
            underlyingAsset: {
              address: "0x62a918876ad2135bdcD35149c9787311D4417912",
              symbol: "USDC",
              name: "USD Coin"
            }
          }
        }
      ]
    },
    {
      chainId: 5,
      address: "0x6b77C186f496A3a36f360a90fcB641c441196acf",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationPairFactory",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPair",
              name: "liquidator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract ILiquidationSource",
              name: "source",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenIn",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenOut",
              type: "address"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "swapMultiplier",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "liquidityFraction",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveIn",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveOut",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minK",
              type: "uint256"
            }
          ],
          name: "PairCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "allPairs",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract ILiquidationSource",
              name: "_source",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "UFixed32x4",
              name: "_swapMultiplier",
              type: "uint32"
            },
            {
              internalType: "UFixed32x4",
              name: "_liquidityFraction",
              type: "uint32"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveIn",
              type: "uint128"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveOut",
              type: "uint128"
            },
            {
              internalType: "uint256",
              name: "_mink",
              type: "uint256"
            }
          ],
          name: "createPair",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          name: "deployedPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalPairs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x19577C83C51a583C9cE13AB5512E9ac336816c22",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "Vault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "contract TwabController",
              name: "_twabController",
              type: "address"
            },
            {
              internalType: "contract IERC4626",
              name: "_yieldVault",
              type: "address"
            },
            {
              internalType: "contract PrizePool",
              name: "_prizePool",
              type: "address"
            },
            {
              internalType: "contract Claimer",
              name: "_claimer",
              type: "address"
            },
            {
              internalType: "address",
              name: "_yieldFeeRecipient",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_yieldFeePercentage",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string"
            }
          ],
          name: "StringTooLong",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool"
            }
          ],
          name: "AutoClaimDisabled",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "previousClaimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "newClaimer",
              type: "address"
            }
          ],
          name: "ClaimerSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract LiquidationPair",
              name: "newLiquidationPair",
              type: "address"
            }
          ],
          name: "LiquidationPairSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "MintYieldFee",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC20",
              name: "asset",
              type: "address"
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              indexed: false,
              internalType: "contract TwabController",
              name: "twabController",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract IERC4626",
              name: "yieldVault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract PrizePool",
              name: "prizePool",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "claimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "yieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "yieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "NewVault",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address"
            }
          ],
          name: "OwnershipOffered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Sponsor",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "previousYieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newYieldFeePercentage",
              type: "uint256"
            }
          ],
          name: "YieldFeePercentageSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousYieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "newYieldFeeRecipient",
              type: "address"
            }
          ],
          name: "YieldFeeRecipientSet",
          type: "event"
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "autoClaimDisabled",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "availableBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldFeeBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_winner",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint96",
              name: "_claimFee",
              type: "uint96"
            },
            {
              internalType: "address",
              name: "_claimFeeRecipient",
              type: "address"
            }
          ],
          name: "claimPrize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "claimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "depositWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "_disable",
              type: "bool"
            }
          ],
          name: "disableAutoClaim",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "version",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32"
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "exchangeRate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "isVaultCollateralized",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountOut",
              type: "uint256"
            }
          ],
          name: "liquidate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "liquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "mintWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_recipient",
              type: "address"
            }
          ],
          name: "mintYieldFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32"
            }
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizePool",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract Claimer",
              name: "claimer_",
              type: "address"
            }
          ],
          name: "setClaimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "liquidationPair_",
              type: "address"
            }
          ],
          name: "setLiquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "yieldFeePercentage_",
              type: "uint256"
            }
          ],
          name: "setYieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "yieldFeeRecipient_",
              type: "address"
            }
          ],
          name: "setYieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "sponsor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "sponsorWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "targetOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "twabController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeTotalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldVault",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      tokens: [
        {
          chainId: 5,
          address: "0x19577C83C51a583C9cE13AB5512E9ac336816c22",
          name: "PoolTogether USD Coin High Yield Prize Token",
          decimals: 6,
          symbol: "PTUSDCHYT",
          extensions: {
            underlyingAsset: {
              address: "0x62a918876ad2135bdcD35149c9787311D4417912",
              symbol: "USDC",
              name: "USD Coin"
            }
          }
        }
      ]
    },
    {
      chainId: 5,
      address: "0x8F03383DE5d897784ed1871A0b5A1Cb3e6c61239",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationPairFactory",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPair",
              name: "liquidator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract ILiquidationSource",
              name: "source",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenIn",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenOut",
              type: "address"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "swapMultiplier",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "liquidityFraction",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveIn",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveOut",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minK",
              type: "uint256"
            }
          ],
          name: "PairCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "allPairs",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract ILiquidationSource",
              name: "_source",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "UFixed32x4",
              name: "_swapMultiplier",
              type: "uint32"
            },
            {
              internalType: "UFixed32x4",
              name: "_liquidityFraction",
              type: "uint32"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveIn",
              type: "uint128"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveOut",
              type: "uint128"
            },
            {
              internalType: "uint256",
              name: "_mink",
              type: "uint256"
            }
          ],
          name: "createPair",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          name: "deployedPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalPairs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0xD3B8ED4Bf211437cf39D2f519a4363C248115750",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "Vault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "contract TwabController",
              name: "_twabController",
              type: "address"
            },
            {
              internalType: "contract IERC4626",
              name: "_yieldVault",
              type: "address"
            },
            {
              internalType: "contract PrizePool",
              name: "_prizePool",
              type: "address"
            },
            {
              internalType: "contract Claimer",
              name: "_claimer",
              type: "address"
            },
            {
              internalType: "address",
              name: "_yieldFeeRecipient",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_yieldFeePercentage",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string"
            }
          ],
          name: "StringTooLong",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool"
            }
          ],
          name: "AutoClaimDisabled",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "previousClaimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "newClaimer",
              type: "address"
            }
          ],
          name: "ClaimerSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract LiquidationPair",
              name: "newLiquidationPair",
              type: "address"
            }
          ],
          name: "LiquidationPairSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "MintYieldFee",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC20",
              name: "asset",
              type: "address"
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              indexed: false,
              internalType: "contract TwabController",
              name: "twabController",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract IERC4626",
              name: "yieldVault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract PrizePool",
              name: "prizePool",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "claimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "yieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "yieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "NewVault",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address"
            }
          ],
          name: "OwnershipOffered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Sponsor",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "previousYieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newYieldFeePercentage",
              type: "uint256"
            }
          ],
          name: "YieldFeePercentageSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousYieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "newYieldFeeRecipient",
              type: "address"
            }
          ],
          name: "YieldFeeRecipientSet",
          type: "event"
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "autoClaimDisabled",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "availableBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldFeeBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_winner",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint96",
              name: "_claimFee",
              type: "uint96"
            },
            {
              internalType: "address",
              name: "_claimFeeRecipient",
              type: "address"
            }
          ],
          name: "claimPrize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "claimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "depositWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "_disable",
              type: "bool"
            }
          ],
          name: "disableAutoClaim",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "version",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32"
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "exchangeRate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "isVaultCollateralized",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountOut",
              type: "uint256"
            }
          ],
          name: "liquidate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "liquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "mintWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_recipient",
              type: "address"
            }
          ],
          name: "mintYieldFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32"
            }
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizePool",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract Claimer",
              name: "claimer_",
              type: "address"
            }
          ],
          name: "setClaimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "liquidationPair_",
              type: "address"
            }
          ],
          name: "setLiquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "yieldFeePercentage_",
              type: "uint256"
            }
          ],
          name: "setYieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "yieldFeeRecipient_",
              type: "address"
            }
          ],
          name: "setYieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "sponsor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "sponsorWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "targetOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "twabController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeTotalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldVault",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      tokens: [
        {
          chainId: 5,
          address: "0xD3B8ED4Bf211437cf39D2f519a4363C248115750",
          name: "PoolTogether Gemini dollar Prize Token",
          decimals: 2,
          symbol: "PTGUSDT",
          extensions: {
            underlyingAsset: {
              address: "0x1D0cdE537D5Ee72fB43a16027874626dd82741F3",
              symbol: "GUSD",
              name: "Gemini dollar"
            }
          }
        }
      ]
    },
    {
      chainId: 5,
      address: "0x7Baf749E768750e76bFFB879A0208303D0de66F3",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationPairFactory",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPair",
              name: "liquidator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract ILiquidationSource",
              name: "source",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenIn",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenOut",
              type: "address"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "swapMultiplier",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "liquidityFraction",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveIn",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveOut",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minK",
              type: "uint256"
            }
          ],
          name: "PairCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "allPairs",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract ILiquidationSource",
              name: "_source",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "UFixed32x4",
              name: "_swapMultiplier",
              type: "uint32"
            },
            {
              internalType: "UFixed32x4",
              name: "_liquidityFraction",
              type: "uint32"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveIn",
              type: "uint128"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveOut",
              type: "uint128"
            },
            {
              internalType: "uint256",
              name: "_mink",
              type: "uint256"
            }
          ],
          name: "createPair",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          name: "deployedPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalPairs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x5c6B34bC145323b2931e8cafeD0b048E636544a6",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "Vault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "contract TwabController",
              name: "_twabController",
              type: "address"
            },
            {
              internalType: "contract IERC4626",
              name: "_yieldVault",
              type: "address"
            },
            {
              internalType: "contract PrizePool",
              name: "_prizePool",
              type: "address"
            },
            {
              internalType: "contract Claimer",
              name: "_claimer",
              type: "address"
            },
            {
              internalType: "address",
              name: "_yieldFeeRecipient",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_yieldFeePercentage",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string"
            }
          ],
          name: "StringTooLong",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool"
            }
          ],
          name: "AutoClaimDisabled",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "previousClaimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "newClaimer",
              type: "address"
            }
          ],
          name: "ClaimerSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract LiquidationPair",
              name: "newLiquidationPair",
              type: "address"
            }
          ],
          name: "LiquidationPairSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "MintYieldFee",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC20",
              name: "asset",
              type: "address"
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              indexed: false,
              internalType: "contract TwabController",
              name: "twabController",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract IERC4626",
              name: "yieldVault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract PrizePool",
              name: "prizePool",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "claimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "yieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "yieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "NewVault",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address"
            }
          ],
          name: "OwnershipOffered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Sponsor",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "previousYieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newYieldFeePercentage",
              type: "uint256"
            }
          ],
          name: "YieldFeePercentageSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousYieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "newYieldFeeRecipient",
              type: "address"
            }
          ],
          name: "YieldFeeRecipientSet",
          type: "event"
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "autoClaimDisabled",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "availableBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldFeeBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_winner",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint96",
              name: "_claimFee",
              type: "uint96"
            },
            {
              internalType: "address",
              name: "_claimFeeRecipient",
              type: "address"
            }
          ],
          name: "claimPrize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "claimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "depositWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "_disable",
              type: "bool"
            }
          ],
          name: "disableAutoClaim",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "version",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32"
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "exchangeRate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "isVaultCollateralized",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountOut",
              type: "uint256"
            }
          ],
          name: "liquidate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "liquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "mintWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_recipient",
              type: "address"
            }
          ],
          name: "mintYieldFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32"
            }
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizePool",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract Claimer",
              name: "claimer_",
              type: "address"
            }
          ],
          name: "setClaimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "liquidationPair_",
              type: "address"
            }
          ],
          name: "setLiquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "yieldFeePercentage_",
              type: "uint256"
            }
          ],
          name: "setYieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "yieldFeeRecipient_",
              type: "address"
            }
          ],
          name: "setYieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "sponsor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "sponsorWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "targetOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "twabController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeTotalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldVault",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      tokens: [
        {
          chainId: 5,
          address: "0x5c6B34bC145323b2931e8cafeD0b048E636544a6",
          name: "PoolTogether Wrapped BTC Prize Token",
          decimals: 8,
          symbol: "PTWBTCT",
          extensions: {
            underlyingAsset: {
              address: "0x6bC6556e16654F72C097F6863418926510Aa3006",
              symbol: "WBTC",
              name: "Wrapped BTC"
            }
          }
        }
      ]
    },
    {
      chainId: 5,
      address: "0x41f1c7b66B14eC52754C5D13f4Fe729D76a3266c",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationPairFactory",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPair",
              name: "liquidator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract ILiquidationSource",
              name: "source",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenIn",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenOut",
              type: "address"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "swapMultiplier",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "liquidityFraction",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveIn",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveOut",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minK",
              type: "uint256"
            }
          ],
          name: "PairCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "allPairs",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract ILiquidationSource",
              name: "_source",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "UFixed32x4",
              name: "_swapMultiplier",
              type: "uint32"
            },
            {
              internalType: "UFixed32x4",
              name: "_liquidityFraction",
              type: "uint32"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveIn",
              type: "uint128"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveOut",
              type: "uint128"
            },
            {
              internalType: "uint256",
              name: "_mink",
              type: "uint256"
            }
          ],
          name: "createPair",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          name: "deployedPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalPairs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    {
      chainId: 5,
      address: "0x427Bb82e04DD13c60167fb9fd7C32BcD4332748B",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "Vault",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_asset",
              type: "address"
            },
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "string",
              name: "_symbol",
              type: "string"
            },
            {
              internalType: "contract TwabController",
              name: "_twabController",
              type: "address"
            },
            {
              internalType: "contract IERC4626",
              name: "_yieldVault",
              type: "address"
            },
            {
              internalType: "contract PrizePool",
              name: "_prizePool",
              type: "address"
            },
            {
              internalType: "contract Claimer",
              name: "_claimer",
              type: "address"
            },
            {
              internalType: "address",
              name: "_yieldFeeRecipient",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_yieldFeePercentage",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string"
            }
          ],
          name: "StringTooLong",
          type: "error"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "user",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool"
            }
          ],
          name: "AutoClaimDisabled",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "previousClaimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "newClaimer",
              type: "address"
            }
          ],
          name: "ClaimerSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Deposit",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "contract LiquidationPair",
              name: "newLiquidationPair",
              type: "address"
            }
          ],
          name: "LiquidationPairSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "recipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "MintYieldFee",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC20",
              name: "asset",
              type: "address"
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string"
            },
            {
              indexed: false,
              internalType: "contract TwabController",
              name: "twabController",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract IERC4626",
              name: "yieldVault",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract PrizePool",
              name: "prizePool",
              type: "address"
            },
            {
              indexed: false,
              internalType: "contract Claimer",
              name: "claimer",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "yieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "yieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "NewVault",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address"
            }
          ],
          name: "OwnershipOffered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Sponsor",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "receiver",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "Withdraw",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "previousYieldFeePercentage",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newYieldFeePercentage",
              type: "uint256"
            }
          ],
          name: "YieldFeePercentageSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousYieldFeeRecipient",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "newYieldFeeRecipient",
              type: "address"
            }
          ],
          name: "YieldFeeRecipientSet",
          type: "event"
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "asset",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "autoClaimDisabled",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "availableBalanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "availableYieldFeeBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "claimOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_winner",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "_tier",
              type: "uint8"
            },
            {
              internalType: "address",
              name: "_to",
              type: "address"
            },
            {
              internalType: "uint96",
              name: "_claimFee",
              type: "uint96"
            },
            {
              internalType: "address",
              name: "_claimFeeRecipient",
              type: "address"
            }
          ],
          name: "claimPrize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "claimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "convertToAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "convertToShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256"
            }
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "depositWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "_disable",
              type: "bool"
            }
          ],
          name: "disableAutoClaim",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "string",
              name: "version",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32"
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "exchangeRate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256"
            }
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "isVaultCollateralized",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountIn",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_amountOut",
              type: "uint256"
            }
          ],
          name: "liquidate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "liquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "maxMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "maxWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "mintWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_recipient",
              type: "address"
            }
          ],
          name: "mintYieldFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "pendingOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "address",
              name: "spender",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32"
            }
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewDeposit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewMint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256"
            }
          ],
          name: "previewRedeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "assets",
              type: "uint256"
            }
          ],
          name: "previewWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "prizePool",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract Claimer",
              name: "claimer_",
              type: "address"
            }
          ],
          name: "setClaimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "liquidationPair_",
              type: "address"
            }
          ],
          name: "setLiquidationPair",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "yieldFeePercentage_",
              type: "uint256"
            }
          ],
          name: "setYieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "yieldFeeRecipient_",
              type: "address"
            }
          ],
          name: "setYieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            }
          ],
          name: "sponsor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256"
            },
            {
              internalType: "uint8",
              name: "_v",
              type: "uint8"
            },
            {
              internalType: "bytes32",
              name: "_r",
              type: "bytes32"
            },
            {
              internalType: "bytes32",
              name: "_s",
              type: "bytes32"
            }
          ],
          name: "sponsorWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address"
            }
          ],
          name: "targetOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalAssets",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "twabController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_assets",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "_receiver",
              type: "address"
            },
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
          ],
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeePercentage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeRecipient",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldFeeTotalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "yieldVault",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      tokens: [
        {
          chainId: 5,
          address: "0x427Bb82e04DD13c60167fb9fd7C32BcD4332748B",
          name: "PoolTogether Wrapped Ether Prize Token",
          decimals: 18,
          symbol: "PTWETHT",
          extensions: {
            underlyingAsset: {
              address: "0xe86425cfb3A55e9EB1D5F2A79F6b583e94921071",
              symbol: "WETH",
              name: "Wrapped Ether"
            }
          }
        }
      ]
    },
    {
      chainId: 5,
      address: "0x619B4349C77b62F058dc8cAb70c0C23bf637C10F",
      version: {
        major: 1,
        minor: 0,
        patch: 0
      },
      type: "LiquidationPairFactory",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract LiquidationPair",
              name: "liquidator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "contract ILiquidationSource",
              name: "source",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "tokenIn",
              type: "address"
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenOut",
              type: "address"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "swapMultiplier",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "UFixed32x4",
              name: "liquidityFraction",
              type: "uint32"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveIn",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "virtualReserveOut",
              type: "uint128"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minK",
              type: "uint256"
            }
          ],
          name: "PairCreated",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "allPairs",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract ILiquidationSource",
              name: "_source",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenIn",
              type: "address"
            },
            {
              internalType: "address",
              name: "_tokenOut",
              type: "address"
            },
            {
              internalType: "UFixed32x4",
              name: "_swapMultiplier",
              type: "uint32"
            },
            {
              internalType: "UFixed32x4",
              name: "_liquidityFraction",
              type: "uint32"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveIn",
              type: "uint128"
            },
            {
              internalType: "uint128",
              name: "_virtualReserveOut",
              type: "uint128"
            },
            {
              internalType: "uint256",
              name: "_mink",
              type: "uint256"
            }
          ],
          name: "createPair",
          outputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "contract LiquidationPair",
              name: "",
              type: "address"
            }
          ],
          name: "deployedPairs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalPairs",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ]
    }
  ]
};
