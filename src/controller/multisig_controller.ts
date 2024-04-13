import { Request, Response } from 'express'
import { MultisigModel } from '../model/multisig'
import { MultisigService } from '../service/multisig'


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
        
        multisig_model.setAddress(req.body["address"])
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
   
    async removeOwner(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setNew_owner(req.body["remove_owner"])

        if (!multisig_model.validateRemoveOwner(multisig_model)) return res.json({
            status: 'validation failed',
        })

        const result = await multisig_service.removeOwner(multisig_model)
        if(result == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:result
        })   

    }
    
    async replaceOwner(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setOld_owner(req.body["old_owner"])
        multisig_model.setNew_owner(req.body["new_owner"])
        
        if (!multisig_model.validateReplaceOwner(multisig_model)) return res.json({
            status: 'validation failed',
        })
        
        const result = await multisig_service.replaceOwner(multisig_model)
        if(result == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:result
        })   
        
    }
    
    async changeRequirement(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setRequired(req.body["new_requirement"])

        if (!multisig_model.validateRequired(multisig_model)) return res.json({
            status: 'validation failed',
        })

        const result = await multisig_service.changeRequirement(multisig_model)
        if(result == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:result
        })   

    }
    
    async getRequired(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.params["address"])
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

        const owners = await multisig_service.addOwners(multisig_model)
        if(owners == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:owners
        })   

    }
}