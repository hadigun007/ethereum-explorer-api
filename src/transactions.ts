import {Request, Response} from 'express'

export class TransactionController {
    index(req:Request, res:Response){
        res.json({
            status:"developing..."
        })
    }
}