export class MultisigModel {
    private address!: string;
    private new_owner !: string;
    private old_owner !: string;
    private owners!: string[];
    private required!: string;
    private balance!:string;

    public getNew_owner():string {
        return this.new_owner;
    }

    public setNew_owner(new_owner:string): void {
        this.new_owner = new_owner;
    }

    public getOld_owner():string {
        return this.old_owner;
    }

    public setOld_owner(old_owner:string): void {
        this.old_owner = old_owner;
    }

    setAddress(address: string) {
        this.address = address
    }

    getAddress(): string {
        return this.address
    }

    setOwners(owners: string[]) {
        this.owners = owners
    }
    
    setBalance(balance: string) {
        this.balance = balance
    }

    getOwners(): string[] {
        return this.owners
    }

    setRequired(required: string) {
        this.required = required
    }

    getRequired(): string {
        return this.required
    }
   
    getBalance(): string {
        return this.balance
    }

    getPayload() {
        return [this.owners, this.required]
    }

    validateCreate(multisig: MultisigModel) {
        if (
            multisig.getOwners() == null ||
            multisig.getOwners().length < 3 ||
            multisig.getRequired() == null ||
            parseInt(multisig.getRequired()) > multisig.getOwners().length
        ) return false
        return true
    }

    validateGetOwner(multisig: MultisigModel) {
        if (multisig.getAddress() == null) return false
        return true
    }
    validateAddOwner(multisig: MultisigModel) {
        if (multisig.getAddress() == null || multisig.getNew_owner() == null) return false
        return true
    }
    validateRemoveOwner(multisig: MultisigModel) {
        if (multisig.getAddress() == null || multisig.getNew_owner() == null) return false
        return true
    }
    validateReplaceOwner(multisig: MultisigModel) {
        if (multisig.getAddress() == null || multisig.getNew_owner() == null || multisig.getOld_owner() == null) return false
        return true
    }
    validateRequired(multisig: MultisigModel) {
        console.log(multisig);
        
        if (multisig.getAddress() == null || multisig.getRequired() == null) return false
        return true
    }
    validateBalance(multisig: MultisigModel) {
        console.log(multisig);
        if (multisig.getBalance() == null) return false
        return true
    }
}

