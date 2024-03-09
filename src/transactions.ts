import { Request, Response } from 'express'
import { Web3 } from 'web3';
import { transactionBuilder } from 'web3/lib/commonjs/eth.exports';
import { TransactionModel } from './model/transaction';

export class TransactionController {
    async index(req: Request, res: Response) {

        const web3 = new Web3('http://127.0.0.1:8545/');

        const count = await web3.eth.getTransactionCount('0x2546BcD3c84621e976D8185a91A922aE77ECEc30')

        res.json({
            status: 'success',
            count: count.toString(),
        })
    }


    async create(req: Request, res: Response) {

        const web3 = new Web3('http://127.0.0.1:8545/');
        const transaction = new TransactionModel()

        const account = web3.eth.accounts.privateKeyToAccount('0x4651f9c219fc6401fe0b3f82129467c717012287ccb61950d2a8ede0687857ba');
        console.log(account.address);
        console.log(await web3.eth.getBalance(account.address));


        const rawTransaction = {
            from: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
            to: '0xdD2FD4581271e230360230F9337D5c0430Bf44C0',
            value: 1,
            maxFeePerGas: (await web3.eth.getBlock()).baseFeePerGas! * 2n,
            maxPriorityFeePerGas: 100000,
            gasLimit: 2000000,
            nonce: await web3.eth.getTransactionCount('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'),
        };

        const signedTransaction = await web3.eth.accounts.signTransaction(rawTransaction, '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e');

        const tx = web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

        tx.on('sending', () => console.log('sending'))
        tx.on('sent', () => console.log('sent'))
        tx.on('transactionHash', () => console.log('transactionHash'))
        tx.on('receipt', () => console.log('receipt'))
        tx.on('error', () => console.log('error'))
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
    }
}