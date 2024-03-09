export class BlockModel {
    private hash!:string
    private parentHash!:string
    private sha3Uncles!:string
    private stateRoot!:string
    private transactionsRoot!:string
    private receiptsRoot!:string
    private number!:string
    private gasUsed!:string
    private gasLimit!:string
    private extraData!:string
    private logsBloom!:string
    private timestamp!:string
    private difficulty!:string
    private totalDifficulty!:string
    private uncles!:string[]
    private transactions!:any[]
    private size!:string
    private mixHash!:string
    private nonce!:string
    private baseFeePerGas!:string
    private miner!:string

    public getHash(): string {
        return this.hash;
    }

    public setHash(hash: string): void {
        this.hash = hash;
    }

    public getParentHash(): string {
        return this.parentHash;
    }

    public setParentHash(parentHash: string): void {
        this.parentHash = parentHash;
    }

    public getSha3Uncles(): string {
        return this.sha3Uncles;
    }

    public setSha3Uncles(sha3Uncles: string): void {
        this.sha3Uncles = sha3Uncles;
    }

    public getStateRoot(): string {
        return this.stateRoot;
    }

    public setStateRoot(stateRoot: string): void {
        this.stateRoot = stateRoot;
    }

    public getTransactionsRoot(): string {
        return this.transactionsRoot;
    }

    public setTransactionsRoot(transactionsRoot: string): void {
        this.transactionsRoot = transactionsRoot;
    }

    public getReceiptsRoot(): string {
        return this.receiptsRoot;
    }

    public setReceiptsRoot(receiptsRoot: string): void {
        this.receiptsRoot = receiptsRoot;
    }

    public getNumber(): string {
        return this.number;
    }

    public setNumber(number: string): void {
        this.number = number;
    }

    public getGasUsed(): string {
        return this.gasUsed;
    }

    public setGasUsed(gasUsed: string): void {
        this.gasUsed = gasUsed;
    }

    public getGasLimit(): string {
        return this.gasLimit;
    }

    public setGasLimit(gasLimit: string): void {
        this.gasLimit = gasLimit;
    }

    public getExtraData(): string {
        return this.extraData;
    }

    public setExtraData(extraData: string): void {
        this.extraData = extraData;
    }

    public getLogsBloom(): string {
        return this.logsBloom;
    }

    public setLogsBloom(logsBloom: string): void {
        this.logsBloom = logsBloom;
    }

    public getTimestamp(): string {
        return this.timestamp;
    }

    public setTimestamp(timestamp: string): void {
        this.timestamp = timestamp;
    }

    public getDifficulty(): string {
        return this.difficulty;
    }

    public setDifficulty(difficulty: string): void {
        this.difficulty = difficulty;
    }

    public getTotalDifficulty(): string {
        return this.totalDifficulty;
    }

    public setTotalDifficulty(totalDifficulty: string): void {
        this.totalDifficulty = totalDifficulty;
    }

    public getUncles(): string[] {
        return this.uncles;
    }

    public setUncles(uncles: string[]): void {
        this.uncles = uncles;
    }

    public getTransactions(): string[] {
        return this.transactions;
    }

    public setTransactions(transactions: any[]): void {
        this.transactions = transactions;
    }

    public getSize(): string {
        return this.size;
    }

    public setSize(size: string): void {
        this.size = size;
    }

    public getMixHash(): string {
        return this.mixHash;
    }

    public setMixHash(mixHash: string): void {
        this.mixHash = mixHash;
    }

    public getNonce(): string {
        return this.nonce;
    }

    public setNonce(nonce: string): void {
        this.nonce = nonce;
    }

    public getBaseFeePerGas(): string {
        return this.baseFeePerGas;
    }

    public setBaseFeePerGas(baseFeePerGas: string): void {
        this.baseFeePerGas = baseFeePerGas;
    }

    public getMiner(): string {
        return this.miner;
    }

    public setMiner(miner: string): void {
        this.miner = miner;
    }

}
