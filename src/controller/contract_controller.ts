import {Request, Response} from 'express'

export class ContractController {
    index(req:Request, res:Response){
        res.json({
            status:"developing..."
        })
    }
}