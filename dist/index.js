"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wallet_1 = require("./wallet");
const transactions_1 = require("./transactions");
const contract_1 = require("./contract");
const account_1 = require("./account");
const util_1 = require("./util");
const app = (0, express_1.default)();
const port = 8045;
app.use(express_1.default.json({ limit: '5mb' }));
const wallet = new wallet_1.WalletController();
const transactions = new transactions_1.TransactionController();
const contract = new contract_1.ContractController();
const account = new account_1.AccountController();
const util = new util_1.UtilController();
app.get('/wallets', wallet.index);
app.get('/wallet/create', wallet.create); // done
app.get('/wallet/balance/:address', wallet.balance); // done
app.get('/accounts', account.index); // done
app.get('/account/create', account.create); // done
app.get('/transactions', transactions.index); // done
app.post('/transaction/create', transactions.create);
app.get('/contracts', contract.index);
app.get('/util/node-info', util.node_info); // done
app.get('/util/block-number', util.block_number); // done
app.listen(port, () => {
    console.log(`server listen on: http://localhost:${port}`);
});
