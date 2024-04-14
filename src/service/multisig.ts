import { abi, bytecode } from "../artifacts/MultisigWallet.json"
import { Web3 } from "web3";
import { host, private_key } from '../config'
import { ReceiptModel } from "../model/receipt";
import { MultisigModel } from "../model/multisig";


export class MultisigService {
    web3 = new Web3(host);
    contract = new this.web3.eth.Contract(abi)
    signer = this.web3.eth.accounts.privateKeyToAccount(private_key);



    async create(multisig_model: MultisigModel): Promise<ReceiptModel> {

        const receipt = new ReceiptModel()

        this.web3.eth.accounts.wallet.add(this.signer);
        console.log(multisig_model.getPayload());
        
        const multisig = this.contract.deploy({
            arguments: multisig_model.getPayload(),
            data: bytecode
        })

        await multisig.send({
            from: this.signer.address
        })
            .on("sending", () => console.log('sending..'))
            .on("sent", () => console.log('sent..'))
            .on("receipt", () => console.log('receipt..'))
            .on("transactionHash", () => console.log('transactionHash..'))
            .on("confirmation", (tx) => {
                console.log('confirmation..')
                console.log(tx)

                receipt.setTransactionHash(tx.receipt.transactionHash)
                receipt.setTransactionIndex(tx.receipt.transactionIndex.toString())
                receipt.setBlockNumber(tx.receipt.blockNumber.toString())
                receipt.setBlockHash(tx.receipt.blockHash)
                receipt.setFrom(tx.receipt.from)
                receipt.setCumulativeGasUsed(tx.receipt.cumulativeGasUsed.toString())
                receipt.setGasUsed(tx.receipt.gasUsed.toString())
                receipt.setContractAddress(tx.receipt.contractAddress?.toString()!)
                receipt.setLogs([])
                receipt.setLogsBloom(tx.receipt.logsBloom)
                receipt.setStatus(tx.receipt.status.toString())
                receipt.setEffectiveGasPrice(tx.receipt.effectiveGasPrice?.toString()!)
                receipt.setType(tx.receipt.type?.toString()!)

            })
            .on("error", (er) => {
                console.log('error..')
                console.log(er)
            })

        return receipt
    }

    async getOwners(address: string) {
        const contract = new this.web3.eth.Contract(abi,address)
        return await contract.methods.getOwners().call()
    }

    async getRequired(address: string) {
        const contract = new this.web3.eth.Contract(abi,address)
        return await contract.methods.getRequired().call()
    }
    
    
    
    async addOwners(multisig:MultisigModel) {
        const receipt = new ReceiptModel()
        const contract = new this.web3.eth.Contract(abi,multisig.getAddress())
        await contract.methods.addOwner(multisig.getNew_owner())
        .send({
            from: this.signer.address
        })
        .on("sending", () => console.log('sending..'))
            .on("sent", () => console.log('sent..'))
            .on("receipt", () => console.log('receipt..'))
            .on("transactionHash", () => console.log('transactionHash..'))
            .on("confirmation", (tx) => {
                console.log('confirmation..')
                console.log(tx.receipt)
                
                receipt.setTransactionHash(tx.receipt.transactionHash)
                receipt.setTransactionIndex(tx.receipt.transactionIndex.toString())
                receipt.setBlockNumber(tx.receipt.blockNumber.toString())
                receipt.setBlockHash(tx.receipt.blockHash)
                receipt.setFrom(tx.receipt.from)
                receipt.setCumulativeGasUsed(tx.receipt.cumulativeGasUsed.toString())
                receipt.setGasUsed(tx.receipt.gasUsed.toString())
                receipt.setLogs([])
                receipt.setLogsBloom(tx.receipt.logsBloom)
                receipt.setStatus(tx.receipt.status.toString())
                receipt.setEffectiveGasPrice(tx.receipt.effectiveGasPrice?.toString()!)
                receipt.setType(tx.receipt.type?.toString()!)
                
            })
            .on("error", (er) => {
                console.log('error..')
                console.log('==============')
                console.log(er.toJSON())
                console.log('==============')
            })

            return receipt

    }
    async removeOwner(multisig:MultisigModel) {
        const receipt = new ReceiptModel()
        const contract = new this.web3.eth.Contract(abi,multisig.getAddress())
        await contract.methods.removeOwner(multisig.getNew_owner())
        .send({
            from: this.signer.address
        })
        .on("sending", () => console.log('sending..'))
            .on("sent", () => console.log('sent..'))
            .on("receipt", () => console.log('receipt..'))
            .on("transactionHash", () => console.log('transactionHash..'))
            .on("confirmation", (tx) => {
                console.log('confirmation..')
                console.log(tx.receipt)
                
                receipt.setTransactionHash(tx.receipt.transactionHash)
                receipt.setTransactionIndex(tx.receipt.transactionIndex.toString())
                receipt.setBlockNumber(tx.receipt.blockNumber.toString())
                receipt.setBlockHash(tx.receipt.blockHash)
                receipt.setFrom(tx.receipt.from)
                receipt.setCumulativeGasUsed(tx.receipt.cumulativeGasUsed.toString())
                receipt.setGasUsed(tx.receipt.gasUsed.toString())
                receipt.setLogs([])
                receipt.setLogsBloom(tx.receipt.logsBloom)
                receipt.setStatus(tx.receipt.status.toString())
                receipt.setEffectiveGasPrice(tx.receipt.effectiveGasPrice?.toString()!)
                receipt.setType(tx.receipt.type?.toString()!)
                
            })
            .on("error", (er) => {
                console.log('error..')
                console.log('==============')
                console.log(er.toJSON())
                console.log('==============')
            })

            return receipt

    }
    async replaceOwner(multisig:MultisigModel) {
        console.log(multisig);
        
        const receipt = new ReceiptModel()
        const contract = new this.web3.eth.Contract(abi,multisig.getAddress())
        await contract.methods.replaceOwner(multisig.getOld_owner(), multisig.getNew_owner())
        .send({
            from: this.signer.address
        })
        .on("sending", () => console.log('sending..'))
            .on("sent", () => console.log('sent..'))
            .on("receipt", () => console.log('receipt..'))
            .on("transactionHash", () => console.log('transactionHash..'))
            .on("confirmation", (tx) => {
                console.log('confirmation..')
                console.log(tx.receipt)
                
                receipt.setTransactionHash(tx.receipt.transactionHash)
                receipt.setTransactionIndex(tx.receipt.transactionIndex.toString())
                receipt.setBlockNumber(tx.receipt.blockNumber.toString())
                receipt.setBlockHash(tx.receipt.blockHash)
                receipt.setFrom(tx.receipt.from)
                receipt.setCumulativeGasUsed(tx.receipt.cumulativeGasUsed.toString())
                receipt.setGasUsed(tx.receipt.gasUsed.toString())
                receipt.setLogs([])
                receipt.setLogsBloom(tx.receipt.logsBloom)
                receipt.setStatus(tx.receipt.status.toString())
                receipt.setEffectiveGasPrice(tx.receipt.effectiveGasPrice?.toString()!)
                receipt.setType(tx.receipt.type?.toString()!)
                
            })
            .on("error", (er) => {
                console.log('error..')
                console.log('==============')
                console.log(er.toJSON())
                console.log('==============')
            })

            return receipt

    }
    async changeRequirement(multisig:MultisigModel) {
        const receipt = new ReceiptModel()
        const contract = new this.web3.eth.Contract(abi,multisig.getAddress())
        await contract.methods.changeRequirement(multisig.getRequired())
        .send({
            from: this.signer.address
        })
        .on("sending", () => console.log('sending..'))
            .on("sent", () => console.log('sent..'))
            .on("receipt", () => console.log('receipt..'))
            .on("transactionHash", () => console.log('transactionHash..'))
            .on("confirmation", (tx) => {
                console.log('confirmation..')
                console.log(tx.receipt)
                
                receipt.setTransactionHash(tx.receipt.transactionHash)
                receipt.setTransactionIndex(tx.receipt.transactionIndex.toString())
                receipt.setBlockNumber(tx.receipt.blockNumber.toString())
                receipt.setBlockHash(tx.receipt.blockHash)
                receipt.setFrom(tx.receipt.from)
                receipt.setCumulativeGasUsed(tx.receipt.cumulativeGasUsed.toString())
                receipt.setGasUsed(tx.receipt.gasUsed.toString())
                receipt.setLogs([])
                receipt.setLogsBloom(tx.receipt.logsBloom)
                receipt.setStatus(tx.receipt.status.toString())
                receipt.setEffectiveGasPrice(tx.receipt.effectiveGasPrice?.toString()!)
                receipt.setType(tx.receipt.type?.toString()!)
                
            })
            .on("error", (er) => {
                console.log('error..')
                console.log('==============')
                console.log(er.toJSON())
                console.log('==============')
            })

            return receipt

    }
    async submitTransaction(multisig:MultisigModel) {
        console.log(multisig);
        
        const receipt = new ReceiptModel()
        const contract = new this.web3.eth.Contract(abi,multisig.getAddress())
        await contract.methods.submitTransaction(multisig.getDestination(), 0,this.web3.utils.fromAscii("0x"))
        .send({
            from: this.signer.address
        })
        .on("sending", () => console.log('sending..'))
            .on("sent", () => console.log('sent..'))
            .on("receipt", () => console.log('receipt..'))
            .on("transactionHash", () => console.log('transactionHash..'))
            .on("confirmation", (tx) => {
                console.log('confirmation..')
                console.log(tx.receipt)
                
                // receipt.setTransactionHash(tx.receipt.transactionHash)
                // receipt.setTransactionIndex(tx.receipt.transactionIndex.toString())
                // receipt.setBlockNumber(tx.receipt.blockNumber.toString())
                // receipt.setBlockHash(tx.receipt.blockHash)
                // receipt.setFrom(tx.receipt.from)
                // receipt.setCumulativeGasUsed(tx.receipt.cumulativeGasUsed.toString())
                // receipt.setGasUsed(tx.receipt.gasUsed.toString())
                // receipt.setLogs([])
                // receipt.setLogsBloom(tx.receipt.logsBloom)
                // receipt.setStatus(tx.receipt.status.toString())
                // receipt.setEffectiveGasPrice(tx.receipt.effectiveGasPrice?.toString()!)
                // receipt.setType(tx.receipt.type?.toString()!)
                
            })
            .on("error", (er) => {
                console.log('error..')
                console.log('==============')
                console.log(er.toJSON())
                console.log('==============')
            })

            return receipt

    }
    
    async transactionCount(multisig:MultisigModel) {
        
        const contract = new this.web3.eth.Contract(abi,multisig.getAddress())
        return await contract.methods.getTransactionCount(multisig.getPending(), multisig.getExecuted()).call()
    }
}