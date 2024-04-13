export class TransactionModel {
    private cumulativeGasUsed!:string
    private logsBloom!:string
    private logs!:any[]
    private status!:string
    private type!:string
    private transactionHash!:string
    private transactionIndex!:string
    private from!: string
    private to!: string
    private gasUsed!: string
    private effectiveGasPrice!: string
    private blockHash!: string
    private blockNumber!: string
    private value!: string
    private private_key!: string
    private chainId!:string
    private input!:string
    private accessList!:string
    private v!:string
    private r!:string
    private s!:string
    private data!:string


    public getPrivate_key(): string {
        return this.private_key;
    }

    public setPrivate_key(private_key: string): void {
        this.private_key = private_key;
    }

    public getChainId(): string {
        return this.chainId;
    }

    public setChainId(chainId: string): void {
        this.chainId = chainId;
    }

    public getInput(): string {
        return this.input;
    }

    public setInput(input: string): void {
        this.input = input;
    }

    public getAccessList(): string {
        return this.accessList;
    }

    public setAccessList(accessList: string): void {
        this.accessList = accessList;
    }

    public getV(): string {
        return this.v;
    }

    public setV(v: string): void {
        this.v = v;
    }

    public getR(): string {
        return this.r;
    }

    public setR(r: string): void {
        this.r = r;
    }

    public getS(): string {
        return this.s;
    }

    public setS(s: string): void {
        this.s = s;
    }

    public getData(): string {
        return this.data;
    }

    public setData(data: string): void {
        this.data = data;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): void {
        this.value = value;
    }


    public getCumulativeGasUsed(): string {
        return this.cumulativeGasUsed;
    }

    public setCumulativeGasUsed(cumulativeGasUsed: string): void {
        this.cumulativeGasUsed = cumulativeGasUsed;
    }

    public getLogsBloom(): string {
        return this.logsBloom;
    }

    public setLogsBloom(logsBloom: string): void {
        this.logsBloom = logsBloom;
    }

    public getLogs(): any[] {
        return this.logs;
    }

    public setLogs(logs: any[]): void {
        this.logs = logs;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getTransactionHash(): string {
        return this.transactionHash;
    }

    public setTransactionHash(transactionHash: string): void {
        this.transactionHash = transactionHash;
    }

    public getTransactionIndex(): string {
        return this.transactionIndex;
    }

    public setTransactionIndex(transactionIndex: string): void {
        this.transactionIndex = transactionIndex;
    }

    public getFrom(): string {
        return this.from;
    }

    public setFrom(from: string): void {
        this.from = from;
    }

    public getTo(): string {
        return this.to;
    }

    public setTo(to: string): void {
        this.to = to;
    }

    public getGasUsed(): string {
        return this.gasUsed;
    }

    public setGasUsed(gasUsed: string): void {
        this.gasUsed = gasUsed;
    }

    public getEffectiveGasPrice(): string {
        return this.effectiveGasPrice;
    }

    public setEffectiveGasPrice(effectiveGasPrice: string): void {
        this.effectiveGasPrice = effectiveGasPrice;
    }

    public getBlockHash(): string {
        return this.blockHash;
    }

    public setBlockHash(blockHash: string): void {
        this.blockHash = blockHash;
    }

    public getBlockNumber(): string {
        return this.blockNumber;
    }

    public setBlockNumber(blockNumber: string): void {
        this.blockNumber = blockNumber;
    }


    validateCeate(trx:TransactionModel):boolean{
        if(
            trx.getPrivate_key() == null ||
            trx.getTo() == null ||
            trx.getValue() == null 
        ) return false
        return true
    }
}