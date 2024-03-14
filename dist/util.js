"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilController = void 0;
const web3_1 = require("web3");
const config_1 = require("./config");
class UtilController {
    async node_info(req, res) {
        const web3 = new web3_1.Web3(config_1.host);
        const accounts = await web3.eth.getNodeInfo();
        res.json({
            status: 'success',
            data: accounts
        });
    }
    async block_number(req, res) {
        const web3 = new web3_1.Web3(config_1.host);
        const accounts = await web3.eth.getBlockNumber();
        res.json({
            status: 'success',
            data: accounts.toString()
        });
    }
}
exports.UtilController = UtilController;
