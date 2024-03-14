import {Request, Response} from 'express'
import { Web3 } from 'web3';
import { host } from './config';

export class AccountController {
    
    
    async index(req:Request, res:Response){
        const web3 = new Web3(host);

        const accounts = await web3.eth.getAccounts()
        
        
        res.json({
            status:'success',
            count: accounts.length,
            data:accounts
        })
    }
   
   
    async create(req:Request, res:Response){
        const web3 = new Web3(host);

        const accounts = web3.eth.accounts.create()
        
        res.json({
            status:'success',
            data:accounts
        })
    }
}