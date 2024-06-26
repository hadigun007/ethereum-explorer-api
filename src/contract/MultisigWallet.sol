// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MultisigWallet {
    event Confirmation(address indexed sender, uint indexed transactionId);
    event Revocation(address indexed sender, uint indexed transactionId);
    event Submission(uint indexed transactionId);
    event Execution(uint indexed transactionId);
    event ExecutionFailure(uint indexed transactionId);
    event Deposit(address indexed sender, uint value);
    event OwnerAddition(address indexed owner);
    event OwnerRemoval(address indexed owner);
    event RequirementChange(uint indexed required);

    uint public constant MAX_OWNER_COUNT = 50;

    mapping(uint => Transaction) public transactions;
    mapping(uint => mapping(address => bool)) public confirmations;
    mapping(address => bool) public isOwner;
    address[] public owners;
    uint public required;
    uint public transactionCount;

    struct Transaction {
        address destination;
        uint value;
        bytes data;
        bool executed;
    }

    modifier onlyWallet() {
        require(msg.sender == address(this));
        _;
    }

    modifier ownerDoesntExist(address owner) {
        require(!isOwner[owner]);
        _;
    }

    modifier ownerExists(address owner) {
        require(isOwner[owner]);
        _;
    }

    modifier transactionExists(uint transactionId) {
        require(transactions[transactionId].destination != address(0x0));
        _;
    }

    modifier confirmed(uint transactionId, address owner) {
        require(confirmations[transactionId][owner]);
        _;
    }

    modifier notConfirmed(uint transactionId, address owner) {
        require(!confirmations[transactionId][owner]);
        _;
    }

    modifier notExecuted(uint transactionId) {
        require(!transactions[transactionId].executed);
        _;
    }

    modifier notNull(address _address) {
        require(_address != address(0x0));
        _;
    }
    // 3 2
    modifier validRequirement(uint ownerCount, uint _required) {
        require(
            ownerCount <= MAX_OWNER_COUNT &&
                _required <= ownerCount &&
                _required != 0 &&
                ownerCount != 0
        );
        _;
    }

    receive() external payable {}

    constructor(
        address[] memory _owners,
        uint _required
    ) validRequirement(_owners.length, _required) {
        for (uint i = 0; i < _owners.length; i++) {
            require(!isOwner[_owners[i]] && _owners[i] != address(0x0));
            isOwner[_owners[i]] = true;
        }
        owners = _owners;
        required = _required;
    }

    // done
    function addOwner(
        address _owner
    )
        public
        ownerDoesntExist(_owner)
        notNull(_owner)
        validRequirement(owners.length + 1, required)
    {
        isOwner[_owner] = true;
        owners.push(_owner);
        emit OwnerAddition(_owner);
    }

    // done
    function removeOwner(address owner) public ownerExists(owner) {
        isOwner[owner] = false;
        for (uint i = 0; i < owners.length - 1; i++) {
            if (owners[i] == owner) {
                owners[i] = owners[owners.length - 1];
                owners.pop();
                break;
            }
        }
        if (required > owners.length) {
            changeRequirement(owners.length);
        }
        emit OwnerRemoval(owner);
    }

    function replaceOwner(
        address owner,
        address newOwner
    ) public ownerExists(owner) ownerDoesntExist(newOwner) {
        for (uint i = 0; i < owners.length; i++) {
            if (owners[i] == owner) {
                owners[i] == newOwner;
                break;
            }
            isOwner[owner] = false;
            isOwner[newOwner] = true;
            emit OwnerRemoval(owner);
            emit OwnerAddition(newOwner);
        }
    }

    // done
    function changeRequirement(
        uint _required
    ) public validRequirement(owners.length, _required) {
        required = _required;
        emit RequirementChange(_required);
    }

    // done

    function submitTransaction(
        address destination,
        uint value,
        bytes memory data
    ) public returns (uint transactionId) {
        transactionId = addTransaction(destination, value, data);
        confirmTransaction(transactionId);
    }

    // done
    function addTransaction(
        address destination,
        uint value,
        bytes memory data
    ) internal returns (uint transactionId) {
        transactionId = transactionCount;
        transactions[transactionId] = Transaction({
            destination: destination,
            value: value,
            data: data,
            executed: false
        });
        transactionCount += 1;
        emit Submission(transactionId);
    }

    // done
    function confirmTransaction(
        uint transactionId
    )
        public
        // ownerExists(msg.sender)
        // transactionExists(transactionId)
        notConfirmed(transactionCount, msg.sender)
    {
        confirmations[transactionId][msg.sender] = true;
        emit Confirmation(msg.sender, transactionId);
        executeTransaction(transactionId);
    }

    function executeTransaction(
        uint transactionId
    )
        public
        ownerExists(msg.sender)
        confirmed(transactionId, msg.sender)
        notExecuted(transactionId)
    {
        if (isConfirmed(transactionId)) {
            Transaction storage txn = transactions[transactionId];
            txn.executed = true;
            if (
                external_call(
                    txn.destination,
                    txn.value,
                    txn.data.length,
                    txn.data
                )
            ) {
                emit Execution(transactionId);
            } else {
                emit ExecutionFailure(transactionId);
                txn.executed;
            }
        }
    }

    function isConfirmed(uint transactionId) public view returns (bool) {
        uint count = 0;
        for (uint i = 0; i < owners.length; i++) {
            if (confirmations[transactionId][owners[i]]) {
                count += 1;
            }
            if (count == required) {
                return true;
            }
        }
    }

    // done
    function external_call(
        address destination,
        uint value,
        uint dataLength,
        bytes memory data
    ) internal returns (bool) {
        bool result;
        assembly {
            let x := mload(0x40)
            let d := add(data, 32)
            result := call(
                sub(gas(), 34710),
                destination,
                value,
                d,
                dataLength,
                x,
                0
            )
        }
        return result;
    }

    function revokeConfirmation(
        uint transactionId
    )
        public
        ownerExists(msg.sender)
        confirmed(transactionId, msg.sender)
        notExecuted(transactionId)
    {
        confirmations[transactionId][msg.sender] = false;
        emit Revocation(msg.sender, transactionId);
    }

    function getConfirmationCount(
        uint transactionId
    ) public view returns (uint count) {
        for (uint i = 0; i < owners.length; i++) {
            if (confirmations[transactionId][owners[i]]) {
                count += 1;
            }
        }
    }

    // done
    function getTransactionCount(
        bool pending,
        bool executed
    ) public view returns (uint count) {
        for (uint i = 0; i < transactionCount; i++) {
            if (
                (pending && !transactions[i].executed) ||
                (executed && transactions[i].executed)
            ) {
                count += 1;
            }
        }
    }

    // done
    function getOwners() public view returns (address[] memory) {
        return owners;
    }

    // done
    function getRequired() public view returns (uint) {
        return required;
    }

    // done
    function getConfirmations(
        uint transactionId
    ) public view returns (address[] memory _confirmations) {
        address[] memory confirmationTemp = new address[](owners.length);
        uint count = 0;
        uint i;
        for (i = 0; i < owners.length; i++) {
            if (confirmations[transactionId][owners[i]]) {
                confirmationTemp[count] = owners[i];
                count += 1;
            }
        }
        _confirmations = new address[](count);
        for (i = 0; i < count; i++) {
            _confirmations[i] = confirmationTemp[i];
        }
    }

    // done: but start from 0
    function getTransactionIds(
        uint from,
        uint to,
        bool pending,
        bool executed
    ) public view returns (uint[] memory _transactionIds) {
        uint[] memory transactionIdsTemp = new uint[](transactionCount);
        uint count = 0;
        uint i;
        for (i = 0; i < transactionCount; i++) {
            if (
                (pending && !transactions[i].executed) ||
                (executed && transactions[i].executed)
            ) {
                transactionIdsTemp[count] = i;
                count += 1;
            }
        }
        _transactionIds = new uint[](to - from);
        for (i = from; i < to; i++) {
            _transactionIds[i - from] = transactionIdsTemp[i];
        }
    }
}
