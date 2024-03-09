import {Request, Response} from 'express'
import { Web3 } from 'web3';

export class UtilController {
    
    async node_info(req:Request, res:Response){
        const web3 = new Web3('http://127.0.0.1:8545/');

        const accounts = await web3.eth.getNodeInfo()
        
        res.json({
            status:'success',
            data:accounts
        })
    }
    
    
    async block_number(req:Request, res:Response){
        const web3 = new Web3('http://127.0.0.1:8545/');

        const accounts = await web3.eth.getBlockNumber()
        
        res.json({
            status:'success',
            data:accounts.toString()
        })
    }
}