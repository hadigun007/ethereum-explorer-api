export class ReceiptModel {
    private transactionHash!:string
    private transactionIndex!:string
    private blockNumber!:string
    private BlockHash!:string
    private from!:string
    private cumulativeGasUsed!:string
    private gasUsed!:string
    private contractAddress!:string
    private logs!:[]
    private logsBloom!:string
    private status!:string
    private effectiveGasPrice!:string
    private type!:string

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

    public getBlockNumber(): string {
        return this.blockNumber;
    }

    public setBlockNumber(blockNumber: string): void {
        this.blockNumber = blockNumber;
    }

    public getBlockHash(): string {
        return this.BlockHash;
    }

    public setBlockHash(BlockHash: string): void {
        this.BlockHash = BlockHash;
    }

    public getFrom(): string {
        return this.from;
    }

    public setFrom(from: string): void {
        this.from = from;
    }

    public getCumulativeGasUsed(): string {
        return this.cumulativeGasUsed;
    }

    public setCumulativeGasUsed(cumulativeGasUsed: string): void {
        this.cumulativeGasUsed = cumulativeGasUsed;
    }

    public getGasUsed(): string {
        return this.gasUsed;
    }

    public setGasUsed(gasUsed: string): void {
        this.gasUsed = gasUsed;
    }

    public getContractAddress(): string {
        return this.contractAddress;
    }

    public setContractAddress(contractAddress: string): void {
        this.contractAddress = contractAddress;
    }

    public getLogs(): [] {
        return this.logs;
    }

    public setLogs(logs: []): void {
        this.logs = logs;
    }

    public getLogsBloom(): string {
        return this.logsBloom;
    }

    public setLogsBloom(logsBloom: string): void {
        this.logsBloom = logsBloom;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getEffectiveGasPrice(): string {
        return this.effectiveGasPrice;
    }

    public setEffectiveGasPrice(effectiveGasPrice: string): void {
        this.effectiveGasPrice = effectiveGasPrice;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

}