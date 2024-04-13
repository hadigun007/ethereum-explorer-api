import {Request, Response} from 'express'
import { Web3 } from 'web3';

export class WalletController {
    
    
    async index(req:Request, res:Response){
        const web3 = new Web3('http://127.0.0.1:8545');
        const wallets =  web3.eth.wallet?.get('0xdD2FD4581271e230360230F9337D5c0430Bf44C0')
    
        res.json({
            status:'success',
            data: wallets
        })
    }
    
    create(req:Request, res:Response){
        const web3 = new Web3('http://127.0.0.1:8545');

        const new_wallet =  web3.eth.wallet?.create(1)
    
        res.json({
            status:'success',
            data:new_wallet
        })

    }

    async balance(req:Request, res:Response){
        const web3 = new Web3('http://127.0.0.1:8545');
        const address = req.params['address']
        
        console.log(address);
        
        const wallets = await web3.eth.getBalance(address)
    
        res.json({
            status:'success',
            data:wallets.toString()
        })
    }
}