"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const web3_1 = require("web3");
const config_1 = require("./config");
class AccountController {
    async index(req, res) {
        const web3 = new web3_1.Web3(config_1.host);
        const accounts = await web3.eth.getAccounts();
        res.json({
            status: 'success',
            count: accounts.length,
            data: accounts
        });
    }
    async create(req, res) {
        const web3 = new web3_1.Web3(config_1.host);
        const accounts = web3.eth.accounts.create();
        res.json({
            status: 'success',
            data: accounts
        });
    }
}
exports.AccountController = AccountController;
