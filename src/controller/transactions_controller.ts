import { Request, Response } from 'express'
import { Web3 } from 'web3';
import { TransactionModel } from '../model/transaction';
import { BlockModel } from '../model/block';
import { host } from '../config';

export class TransactionController {

    web3 = new Web3(host);

    
    async index(req: Request, res: Response) {

        const web3 = new Web3(host);
        const block_count = await web3.eth.getBlockNumber()
        const bc = parseInt(block_count.toString())+1
        

        const blocks:BlockModel[] = []
        
        for(let i=1;i<bc;i++){
            const block = new BlockModel()
            const raw_block = await web3.eth.getBlock(i)

            block.setHash(raw_block.hash!)
            block.setParentHash(raw_block.parentHash!)
            block.setSha3Uncles(raw_block.sha3Uncles!)
            block.setStateRoot(raw_block.stateRoot!)
            block.setTransactionsRoot(raw_block.transactionsRoot!)
            block.setReceiptsRoot(raw_block.receiptsRoot)
            block.setNumber(raw_block.number.toString())
            block.setGasUsed(raw_block.gasUsed.toString()!)
            block.setGasLimit(raw_block.gasLimit.toString()!)
            block.setExtraData(raw_block.extraData!)
            block.setLogsBloom(raw_block.logsBloom!)
            block.setTimestamp(raw_block.timestamp.toString()!)
            block.setDifficulty(raw_block.difficulty?.toString()!)
            block.setUncles(raw_block.uncles!)
            block.setTransactions(raw_block.transactions)
            block.setSize(raw_block.size.toString()!)
            block.setMixHash(raw_block.mixHash!)
            block.setNonce(raw_block.nonce.toString()!)
            block.setBaseFeePerGas(raw_block.baseFeePerGas?.toString()!)
            block.setMiner(raw_block.miner!)

            blocks.push(block)
        }

        const count = await web3.eth.getTransactionCount('0x2546BcD3c84621e976D8185a91A922aE77ECEc30')

        res.json({
            status: 'success',
            block_count: block_count.toString(),
            block: blocks,
        })
    }


    async create(req: Request, res: Response) {

        const web3 = new Web3(host);
        const transaction = new TransactionModel()
        const request = new TransactionModel()

        request.setPrivate_key(req.body['private_key'])
        console.log(request.getPrivate_key());
        
        request.setTo(req.body['to'])
        request.setValue(req.body['value'])
        request.setFrom(web3.eth.accounts.privateKeyToAccount(request.getPrivate_key()).address)
        
        if(!request.validateCeate(request)) return res.status(500).json({status:"failed"})

        const rawTransaction = {
            from:request.getFrom(),
            to: request.getTo(),
            value: web3.utils.toWei(request.getValue(), 'ether'),
            maxFeePerGas: (await web3.eth.getBlock()).baseFeePerGas! * 2n,
            maxPriorityFeePerGas: 100000,
            gasLimit: 2000000,
            nonce: await web3.eth.getTransactionCount(request.getFrom()),
        };

        const signedTransaction = await web3.eth.accounts.signTransaction(rawTransaction, request.getPrivate_key());

        const tx = web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

        tx.on('sending', () => console.log('sending'))
        tx.on('sent', () => console.log('sent'))
        tx.on('transactionHash', () => console.log('transactionHash'))
        tx.on('receipt', () => console.log('receipt'))
        tx.on('confirmation', (tx) => {

            transaction.setCumulativeGasUsed(tx.receipt.cumulativeGasUsed.toString())
            transaction.setLogsBloom(tx.receipt.logsBloom.toString())
            transaction.setLogs(tx.receipt.logs)
            transaction.setStatus(tx.receipt.status.toString())
            transaction.setType(tx.receipt.type?.toString()!)
            transaction.setTransactionHash(tx.receipt.transactionHash.toString())
            transaction.setTransactionIndex(tx.receipt.transactionIndex.toString())
            transaction.setFrom(tx.receipt.from)
            transaction.setTo(tx.receipt.to)
            transaction.setGasUsed(tx.receipt.gasUsed.toString())
            transaction.setEffectiveGasPrice(tx.receipt.effectiveGasPrice?.toString()!)
            transaction.setBlockHash(tx.receipt.blockHash.toString())
            transaction.setBlockNumber(tx.receipt.blockNumber.toString())

            res.json({
                status: 'success',
                data: transaction
            })
        })
        tx.on("error", (er) => {
            console.log('error..')
            console.log('==============')
            console.log(er.toJSON())
            console.log('==============')
        })

    }

    async transaction(req: Request, res: Response){
        const web3 = new Web3(host);
        const request = new TransactionModel()

        request.setTransactionHash(req.params["tx_hash"])

        const trx = await web3.eth.getTransaction(request.getTransactionHash())

        

        console.log(trx);
        


    }
}