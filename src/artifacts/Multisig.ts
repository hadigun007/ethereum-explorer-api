
    export const abi=[
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "owners",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "removeOwner",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "revokeConfirmation",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "confirmations",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "pending",
                    "type": "bool"
                },
                {
                    "name": "executed",
                    "type": "bool"
                }
            ],
            "name": "getTransactionCount",
            "outputs": [
                {
                    "name": "count",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "addOwner",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "isConfirmed",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "getConfirmationCount",
            "outputs": [
                {
                    "name": "count",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "transactions",
            "outputs": [
                {
                    "name": "destination",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes"
                },
                {
                    "name": "executed",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOwners",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "from",
                    "type": "uint256"
                },
                {
                    "name": "to",
                    "type": "uint256"
                },
                {
                    "name": "pending",
                    "type": "bool"
                },
                {
                    "name": "executed",
                    "type": "bool"
                }
            ],
            "name": "getTransactionIds",
            "outputs": [
                {
                    "name": "_transactionIds",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "getConfirmations",
            "outputs": [
                {
                    "name": "_confirmations",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "transactionCount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_required",
                    "type": "uint256"
                }
            ],
            "name": "changeRequirement",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "confirmTransaction",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "destination",
                    "type": "address"
                },
                {
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "submitTransaction",
            "outputs": [
                {
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "MAX_OWNER_COUNT",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "required",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function",
            "stateMutability": "view"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "owner",
                    "type": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "replaceOwner",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "executeTransaction",
            "outputs": [],
            "payable": false,
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "inputs": [
                {
                    "name": "_owners",
                    "type": "address[]"
                },
                {
                    "name": "_required",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "constructor",
            "stateMutability": "nonpayable"
        },
        {
            "payable": true,
            "type": "fallback",
            "stateMutability": "payable"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "Confirmation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "Revocation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "Submission",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "Execution",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "transactionId",
                    "type": "uint256"
                }
            ],
            "name": "ExecutionFailure",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnerAddition",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnerRemoval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "required",
                    "type": "uint256"
                }
            ],
            "name": "RequirementChange",
            "type": "event"
        }
    ]
    export const bytecode = "606060405234156200001057600080fd5b6040516200231538038062002315833981016040528080518201919060200180519060200190919050505b600082518260328211158015620000525750818111155b801562000060575060008114155b80156200006e575060008214155b15156200007a57600080fd5b600092505b8451831015620001b6576002600086858151811015156200009c57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161580156200012b5750600085848151811015156200010857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1614155b15156200013757600080fd5b60016002600087868151811015156200014c57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b82806001019350506200007f565b8460039080519060200190620001ce929190620001e3565b50836004819055505b5b5050505050620002b8565b8280548282559060005260206000209081019282156200025f579160200282015b828111156200025e5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000204565b5b5090506200026e919062000272565b5090565b620002b591905b80821115620002b157600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010162000279565b5090565b90565b61204d80620002c86000396000f3006060604052361561011b576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063025e7c2714610177578063173825d9146101da57806320ea8d86146102135780632f54bf6e146102365780633411c81c1461028757806354741525146102e15780637065cb4814610325578063784547a71461035e5780638b51d13f146103995780639ace38c2146103d0578063a0e67e2b146104ce578063a8abe69a14610539578063b5dc40c3146105d1578063b77bf6001461064a578063ba51a6df14610673578063c01a8c8414610696578063c6427474146106b9578063d74f8edd14610752578063dc8452cd1461077b578063e20056e6146107a4578063ee22610b146107fc575b5b6000341115610174573373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a25b5b005b341561018257600080fd5b610198600480803590602001909190505061081f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101e557600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061085f565b005b341561021e57600080fd5b6102346004808035906020019091905050610ac7565b005b341561024157600080fd5b61026d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c73565b604051808215151515815260200191505060405180910390f35b341561029257600080fd5b6102c7600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c93565b604051808215151515815260200191505060405180910390f35b34156102ec57600080fd5b61030f600480803515159060200190919080351515906020019091905050610cc2565b6040518082815260200191505060405180910390f35b341561033057600080fd5b61035c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d56565b005b341561036957600080fd5b61037f6004808035906020019091905050610f23565b604051808215151515815260200191505060405180910390f35b34156103a457600080fd5b6103ba600480803590602001909190505061100b565b6040518082815260200191505060405180910390f35b34156103db57600080fd5b6103f160048080359060200190919050506110da565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001831515151581526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104bc5780601f10610491576101008083540402835291602001916104bc565b820191906000526020600020905b81548152906001019060200180831161049f57829003601f168201915b50509550505050505060405180910390f35b34156104d957600080fd5b6104e1611136565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105255780820151818401525b602081019050610509565b505050509050019250505060405180910390f35b341561054457600080fd5b6105796004808035906020019091908035906020019091908035151590602001909190803515159060200190919050506111cb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105bd5780820151818401525b6020810190506105a1565b505050509050019250505060405180910390f35b34156105dc57600080fd5b6105f2600480803590602001909190505061132c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156106365780820151818401525b60208101905061061a565b505050509050019250505060405180910390f35b341561065557600080fd5b61065d61155d565b6040518082815260200191505060405180910390f35b341561067e57600080fd5b6106946004808035906020019091905050611563565b005b34156106a157600080fd5b6106b760048080359060200190919050506115e5565b005b34156106c457600080fd5b61073c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506117c6565b6040518082815260200191505060405180910390f35b341561075d57600080fd5b6107656117e6565b6040518082815260200191505060405180910390f35b341561078657600080fd5b61078e6117eb565b6040518082815260200191505060405180910390f35b34156107af57600080fd5b6107fa600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117f1565b005b341561080757600080fd5b61081d6004808035906020019091905050611ad4565b005b60038181548110151561082e57fe5b906000526020600020900160005b915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156108ba57600080fd5b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600091505b600160038054905003821015610a46578273ffffffffffffffffffffffffffffffffffffffff1660038381548110151561094d57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a385760036001600380549050038154811015156109ad57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff166003838154811015156109e957fe5b906000526020600020900160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a46565b5b8180600101925050610917565b6001600381818054905003915081610a5e9190611efc565b506003805490506004541115610a7d57610a7c600380549050611563565b5b8273ffffffffffffffffffffffffffffffffffffffff167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a25b5b505050565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610b2057600080fd5b81336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610b8b57600080fd5b8360008082815260200190815260200160002060030160009054906101000a900460ff16151515610bbb57600080fd5b60006001600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167ff6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e960405160405180910390a35b5b505b50505b5050565b60026020528060005260406000206000915054906101000a900460ff1681565b60016020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600080600090505b600554811015610d4e57838015610d01575060008082815260200190815260200160002060030160009054906101000a900460ff16155b80610d345750828015610d33575060008082815260200190815260200160002060030160009054906101000a900460ff165b5b15610d40576001820191505b5b8080600101915050610cca565b5b5092915050565b80600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515610db057600080fd5b8160008173ffffffffffffffffffffffffffffffffffffffff1614151515610dd757600080fd5b60016003805490500160045460328211158015610df45750818111155b8015610e01575060008114155b8015610e0e575060008214155b1515610e1957600080fd5b6001600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060038054806001018281610e859190611f28565b916000526020600020900160005b87909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508473ffffffffffffffffffffffffffffffffffffffff167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25b5b50505b505b5050565b6000806000809150600090505b60038054905081101561100357600160008581526020019081526020016000206000600383815481101515610f6157fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610fe2576001820191505b600454821415610ff55760019250611004565b5b8080600101915050610f30565b5b5050919050565b600080600090505b6003805490508110156110d35760016000848152602001908152602001600020600060038381548110151561104457fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156110c5576001820191505b5b8080600101915050611013565b5b50919050565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201908060030160009054906101000a900460ff16905084565b61113e611f54565b60038054806020026020016040519081016040528092919081815260200182805480156111c057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611176575b505050505090505b90565b6111d3611f68565b6111db611f68565b6000806005546040518059106111ee5750595b908082528060200260200182016040525b50925060009150600090505b6005548110156112ac57858015611242575060008082815260200190815260200160002060030160009054906101000a900460ff16155b806112755750848015611274575060008082815260200190815260200160002060030160009054906101000a900460ff165b5b1561129e5780838381518110151561128957fe5b90602001906020020181815250506001820191505b5b808060010191505061120b565b8787036040518059106112bc5750595b908082528060200260200182016040525b5093508790505b868110156113205782818151811015156112ea57fe5b906020019060200201518489830381518110151561130457fe5b90602001906020020181815250505b80806001019150506112d4565b5b505050949350505050565b611334611f54565b61133c611f54565b6000806003805490506040518059106113525750595b908082528060200260200182016040525b50925060009150600090505b6003805490508110156114b5576001600086815260200190815260200160002060006003838154811015156113a057fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156114a75760038181548110151561142957fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838381518110151561146457fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506001820191505b5b808060010191505061136f565b816040518059106114c35750595b908082528060200260200182016040525b509350600090505b818110156115545782818151811015156114f257fe5b90602001906020020151848281518110151561150a57fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b80806001019150506114dc565b5b505050919050565b60055481565b600380549050816032821115801561157b5750818111155b8015611588575060008114155b8015611595575060008214155b15156115a057600080fd5b826004819055507fa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a836040518082815260200191505060405180910390a15b5b505050565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561163e57600080fd5b81600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561169a57600080fd5b82336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151561170657600080fd5b600180600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef60405160405180910390a36117bb85611ad4565b5b5b50505b505b5050565b60006117d3848484611d80565b90506117de816115e5565b5b9392505050565b603281565b60045481565b600082600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561184c57600080fd5b82600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515156118a657600080fd5b600092505b600380549050831015611994578473ffffffffffffffffffffffffffffffffffffffff166003848154811015156118de57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611986578360038481548110151561193757fe5b906000526020600020900160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611994565b5b82806001019350506118ab565b6000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508473ffffffffffffffffffffffffffffffffffffffff167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a28373ffffffffffffffffffffffffffffffffffffffff167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25b5b505b50505050565b600033600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611b2f57600080fd5b82336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611b9a57600080fd5b8460008082815260200190815260200160002060030160009054906101000a900460ff16151515611bca57600080fd5b611bd386610f23565b15611d7457600080878152602001908152602001600020945060018560030160006101000a81548160ff021916908315150217905550611cf18560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866001015487600201805460018160011615610100020316600290049050886002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ce75780601f10611cbc57610100808354040283529160200191611ce7565b820191906000526020600020905b815481529060010190602001808311611cca57829003601f168201915b5050505050611ed4565b15611d2857857f33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed7560405160405180910390a2611d73565b857f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923660405160405180910390a260008560030160006101000a81548160ff0219169083151502179055505b5b5b5b505b50505b505050565b60008360008173ffffffffffffffffffffffffffffffffffffffff1614151515611da957600080fd5b60055491506080604051908101604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020016000151581525060008084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002019080519060200190611e68929190611f7c565b5060608201518160030160006101000a81548160ff0219169083151502179055509050506001600560008282540192505081905550817fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5160405160405180910390a25b5b509392505050565b6000806040516020840160008287838a8c6187965a03f1925050508091505b50949350505050565b815481835581811511611f2357818360005260206000209182019101611f229190611ffc565b5b505050565b815481835581811511611f4f57818360005260206000209182019101611f4e9190611ffc565b5b505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611fbd57805160ff1916838001178555611feb565b82800160010185558215611feb579182015b82811115611fea578251825591602001919060010190611fcf565b5b509050611ff89190611ffc565b5090565b61201e91905b8082111561201a576000816000905550600101612002565b5090565b905600a165627a7a723058209120c91421648989e10cb34704c2436e700961558b6be28c5d983273db4957db0029"