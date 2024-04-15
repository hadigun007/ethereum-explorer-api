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
   
    
    async submitTransaction(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setDestination(req.body["destination"])
        multisig_model.setValue(req.body["value"])
        multisig_model.setData(req.body["data"])

        if (!multisig_model.validateSubmitTransaction(multisig_model)) return res.json({
            status: 'validation failed',
        })

        
        const owners = await multisig_service.submitTransaction(multisig_model)
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
        
        multisig_model.setAddress(req.body["address"])
        if (!multisig_model.validateGetOwner(multisig_model)) return res.json({
            status: 'validation failed',
        })

        const required = await multisig_service.getRequired(multisig_model.getAddress())
        if(required == null)  return res.json({
            status: 'service failed',
        })

        console.log(required);
        
        res.json({
            status:"success",
            data:required.toString()
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

    async transactionCount(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()

        
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setPending(req.body["pending"])
        multisig_model.setExecuted(req.body["executed"])

        if (!multisig_model.validateTransactionCount(multisig_model)) return res.json({
            status: 'validation failed',
        })
        
        const transaction_count = await multisig_service.transactionCount(multisig_model)
        if(transaction_count == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:transaction_count.toString()
        })   
    }
    
    async getConfirmations(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setTransactionId(req.body["transaction_id"])

        if (!multisig_model.validateTransactionConfirmations(multisig_model)) return res.json({
            status: 'validation failed',
        })

        
        const transaction_confirmations = await multisig_service.transactionConfirmations(multisig_model)

        if(transaction_confirmations == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:transaction_confirmations.toString()
        })   
    }
    
    async confirmTransaction(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setTransactionId(req.body["transaction_id"])
        multisig_model.setPrivateKey(req.body["private_key"])

        if (!multisig_model.validateConfirmTransaction(multisig_model)) return res.json({
            status: 'validation failed',
        })
        
        const transaction_confirmations = await multisig_service.confirmTransaction(multisig_model)

        console.log("========");
        console.log(transaction_confirmations);
        console.log("========");
        
        if(transaction_confirmations == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:transaction_confirmations.toString()
        })   
    }
   
    async getTransactionIds(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setFrom(req.body["from"])
        multisig_model.setDestination(req.body["to"])
        multisig_model.setPending(req.body["pending"])
        multisig_model.setExecuted(req.body["executed"])

        console.log(multisig_model);
        

        if (!multisig_model.validateGetTransactionId(multisig_model)) return res.json({
            status: 'validation failed',
        })
        
        const transaction_id = await multisig_service.getTransactionIds(multisig_model)

        console.log("========");
        console.log(transaction_id);
        console.log("========");
        
        if(transaction_id == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:transaction_id.toString()
        })   
    }
    
    async getConfirmationCount(req: Request, res: Response){
        const multisig_model = new MultisigModel()
        const multisig_service = new MultisigService()
        
        multisig_model.setAddress(req.body["contract_address"])
        multisig_model.setTransactionId(req.body["transaction_id"])

        console.log(multisig_model);
        

        if (!multisig_model.validateConfirmationCount(multisig_model)) return res.json({
            status: 'validation failed',
        })
        
        const transaction_id = await multisig_service.getConfirmationCount(multisig_model)

        console.log("========");
        console.log(transaction_id);
        console.log("========");
        
        if(transaction_id == null)  return res.json({
            status: 'service failed',
        })
        res.json({
            status:"success",
            data:transaction_id.toString()
        })   
    }
}