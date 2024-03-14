export class MultisigModel {
    private address!:string;
    private owners!:string[];
    private required!:string;

    setAddress( address: string){
        this.address = address
    }

    getAddress():string{
        return this.address
    }
    
    setOwners( owners: string[]){
        this.owners = owners
    }

    getOwners():string[]{
        return this.owners
    }

    setRequired(required:string){
        this.required = required
    }

    getRequired():string{
        return this.required
    }

    getPayload(){
        return [this.owners, this.required ]
    }

    validateCreate(multisig:MultisigModel){
        
        if(
        multisig.getOwners() == null || 
        multisig.getOwners().length < 3 || 
        multisig.getRequired() == null ||
        parseInt(multisig.getRequired()) > multisig.getOwners().length        
        ) return false
        return true
    }
}

