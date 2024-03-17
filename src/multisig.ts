import { Request, Response } from 'express'
import { MultisigModel } from './model/multisig'
import { MultisigService } from './service/multisig'


export class MultisigWallet {
    
    async create(req: Request, res: Response) {
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setOwners(req.body["owners"])
        multisig_model.setRequired(req.body["required"])
        
        if (!multisig_model.validateCreate(multisig_model)) return res.json({
            status: 'validation failed',
        })
        
        const receipt = await multisig_service.create(multisig_model)
        if(receipt.getTransactionHash() == null)  return res.json({
            status: 'service failed',
        })
        res.json(receipt)   
    }
    
    async getOwners(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        if (!multisig_model.validateGetOwner(multisig_model)) return res.json({
            status: 'validation failed',
        })

        
        const owners = await multisig_service.getOwners(multisig_model.getAddress())
        if(owners == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:owners
        })   

    }
    
    async addOwners(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setNew_owner(req.body["new_owner"])

        if (!multisig_model.validateAddOwner(multisig_model)) return res.json({
            status: 'validation failed',
        })

        const owners = await multisig_service.addOwners(multisig_model.getAddress(), multisig_model.getNew_owner())
        if(owners == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:owners
        })   

    }
}