export class MultisigModel {
    private address!: string;
    private new_owner !: string;

    public getNew_owner():string {
        return this.new_owner;
    }

    public setNew_owner(new_owner:string): void {
        this.new_owner = new_owner;
    }

    private owners!: string[];
    private required!: string;

    setAddress(address: string) {
        this.address = address
    }

    getAddress(): string {
        return this.address
    }

    setOwners(owners: string[]) {
        this.owners = owners
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
        console.log(multisig);
        
        if (multisig.getAddress() == null || multisig.getNew_owner() == null) return false
        return true
    }
}

