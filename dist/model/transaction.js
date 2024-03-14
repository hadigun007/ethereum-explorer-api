"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = void 0;
class TransactionModel {
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    getCumulativeGasUsed() {
        return this.cumulativeGasUsed;
    }
    setCumulativeGasUsed(cumulativeGasUsed) {
        this.cumulativeGasUsed = cumulativeGasUsed;
    }
    getLogsBloom() {
        return this.logsBloom;
    }
    setLogsBloom(logsBloom) {
        this.logsBloom = logsBloom;
    }
    getLogs() {
        return this.logs;
    }
    setLogs(logs) {
        this.logs = logs;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getTransactionHash() {
        return this.transactionHash;
    }
    setTransactionHash(transactionHash) {
        this.transactionHash = transactionHash;
    }
    getTransactionIndex() {
        return this.transactionIndex;
    }
    setTransactionIndex(transactionIndex) {
        this.transactionIndex = transactionIndex;
    }
    getFrom() {
        return this.from;
    }
    setFrom(from) {
        this.from = from;
    }
    getTo() {
        return this.to;
    }
    setTo(to) {
        this.to = to;
    }
    getGasUsed() {
        return this.gasUsed;
    }
    setGasUsed(gasUsed) {
        this.gasUsed = gasUsed;
    }
    getEffectiveGasPrice() {
        return this.effectiveGasPrice;
    }
    setEffectiveGasPrice(effectiveGasPrice) {
        this.effectiveGasPrice = effectiveGasPrice;
    }
    getBlockHash() {
        return this.blockHash;
    }
    setBlockHash(blockHash) {
        this.blockHash = blockHash;
    }
    getBlockNumber() {
        return this.blockNumber;
    }
    setBlockNumber(blockNumber) {
        this.blockNumber = blockNumber;
    }
    validateCeate(trx) {
        if (trx.getFrom() == null ||
            trx.getTo() == null ||
            trx.getValue() == null)
            return false;
        return true;
    }
}
exports.TransactionModel = TransactionModel;
