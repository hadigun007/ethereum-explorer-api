"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockModel = void 0;
class BlockModel {
    getHash() {
        return this.hash;
    }
    setHash(hash) {
        this.hash = hash;
    }
    getParentHash() {
        return this.parentHash;
    }
    setParentHash(parentHash) {
        this.parentHash = parentHash;
    }
    getSha3Uncles() {
        return this.sha3Uncles;
    }
    setSha3Uncles(sha3Uncles) {
        this.sha3Uncles = sha3Uncles;
    }
    getStateRoot() {
        return this.stateRoot;
    }
    setStateRoot(stateRoot) {
        this.stateRoot = stateRoot;
    }
    getTransactionsRoot() {
        return this.transactionsRoot;
    }
    setTransactionsRoot(transactionsRoot) {
        this.transactionsRoot = transactionsRoot;
    }
    getReceiptsRoot() {
        return this.receiptsRoot;
    }
    setReceiptsRoot(receiptsRoot) {
        this.receiptsRoot = receiptsRoot;
    }
    getNumber() {
        return this.number;
    }
    setNumber(number) {
        this.number = number;
    }
    getGasUsed() {
        return this.gasUsed;
    }
    setGasUsed(gasUsed) {
        this.gasUsed = gasUsed;
    }
    getGasLimit() {
        return this.gasLimit;
    }
    setGasLimit(gasLimit) {
        this.gasLimit = gasLimit;
    }
    getExtraData() {
        return this.extraData;
    }
    setExtraData(extraData) {
        this.extraData = extraData;
    }
    getLogsBloom() {
        return this.logsBloom;
    }
    setLogsBloom(logsBloom) {
        this.logsBloom = logsBloom;
    }
    getTimestamp() {
        return this.timestamp;
    }
    setTimestamp(timestamp) {
        this.timestamp = timestamp;
    }
    getDifficulty() {
        return this.difficulty;
    }
    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }
    getTotalDifficulty() {
        return this.totalDifficulty;
    }
    setTotalDifficulty(totalDifficulty) {
        this.totalDifficulty = totalDifficulty;
    }
    getUncles() {
        return this.uncles;
    }
    setUncles(uncles) {
        this.uncles = uncles;
    }
    getTransactions() {
        return this.transactions;
    }
    setTransactions(transactions) {
        this.transactions = transactions;
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
    getMixHash() {
        return this.mixHash;
    }
    setMixHash(mixHash) {
        this.mixHash = mixHash;
    }
    getNonce() {
        return this.nonce;
    }
    setNonce(nonce) {
        this.nonce = nonce;
    }
    getBaseFeePerGas() {
        return this.baseFeePerGas;
    }
    setBaseFeePerGas(baseFeePerGas) {
        this.baseFeePerGas = baseFeePerGas;
    }
    getMiner() {
        return this.miner;
    }
    setMiner(miner) {
        this.miner = miner;
    }
}
exports.BlockModel = BlockModel;
