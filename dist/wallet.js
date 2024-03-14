"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletController = void 0;
const web3_1 = require("web3");
class WalletController {
    async index(req, res) {
        const web3 = new web3_1.Web3('http://127.0.0.1:8545');
        const wallets = web3.eth.wallet?.get('0xdD2FD4581271e230360230F9337D5c0430Bf44C0');
        res.json({
            status: 'success',
            data: wallets
        });
    }
    create(req, res) {
        const web3 = new web3_1.Web3('http://127.0.0.1:8545');
        const new_wallet = web3.eth.wallet?.create(1);
        res.json({
            status: 'success',
            data: new_wallet
        });
    }
    async balance(req, res) {
        const web3 = new web3_1.Web3('http://127.0.0.1:8545');
        const address = req.params['address'];
        console.log(address);
        const wallets = await web3.eth.getBalance(address);
        res.json({
            status: 'success',
            data: wallets.toString()
        });
    }
}
exports.WalletController = WalletController;
