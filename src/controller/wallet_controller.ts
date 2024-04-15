import {Request, Response} from 'express'
import { Web3 } from 'web3';
import { host, private_key } from '../config'


export class WalletController {
    
    
    async index(req:Request, res:Response){
        const web3 = new Web3(host);
        const wallets =  web3.eth.wallet?.get('0xdD2FD4581271e230360230F9337D5c0430Bf44C0')
    
        res.json({
            status:'success',
            data: wallets
        })
    }
    
    create(req:Request, res:Response){
        const web3 = new Web3(host);

        const new_wallet =  web3.eth.wallet?.create(1)
    
        res.json({
            status:'success',
            data:new_wallet
        })

    }

    async balance(req:Request, res:Response){
        const web3 = new Web3(host);
        const address = req.body['address']
        
        const wallets = await web3.eth.getBalance(address)
    
        res.json({
            status:'success',
            data:wallets.toString()
        })
    }
}