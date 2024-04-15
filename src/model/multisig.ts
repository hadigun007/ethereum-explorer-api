export class MultisigModel {
    private address!: string;
    private new_owner !: string;
    private old_owner !: string;
    private destination !: string;
    private value !: string;
    private data !: string;
    private owners!: string[];
    private required!: string;
    private balance!:string;
    private pending!:string;
    private executed!:string;
    private transaction_id!:string;

    public getTransactionId():string {
        return this.transaction_id;
    }

    public setTransactionId(transaction_id:string): void {
        this.transaction_id = transaction_id;
    }
    public getPending():string {
        return this.pending;
    }

    public setPending(pending:string): void {
        this.pending = pending;
    }
    public getExecuted():string {
        return this.executed;
    }

    public setExecuted(executed:string): void {
        this.executed = executed;
    }
    public getDestination():string {
        return this.destination;
    }

    public setDestination(destination:string): void {
        this.destination = destination;
    }
    
    public getValue():string {
        return this.value;
    }

    public setValue(value:string): void {
        this.value = value;
    }
   
    
    public getData():string {
        return this.data;
    }

    public setData(data:string): void {
        this.data = data;
    }
   

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
    validateSubmitTransaction(multisig: MultisigModel) {
        if (multisig.getAddress() == null || multisig.getDestination() == null || multisig.getValue() == null || multisig.getData() == null) return false
        return true
    }
    validateTransactionCount(multisig: MultisigModel) {
        if (multisig.getAddress() == null || multisig.getPending() == null || multisig.getExecuted() == null) return false
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
    validateTransactionConfirmations(multisig: MultisigModel) {
        if (multisig.getAddress() == null || multisig.getTransactionId() == null) return false
        return true
    }
}

