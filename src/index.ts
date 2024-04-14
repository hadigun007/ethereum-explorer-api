import express from 'express'
import { WalletController } from './controller/wallet_controller'
import { TransactionController } from './controller/transactions_controller'
import { ContractController } from './controller/contract_controller'
import { AccountController } from './controller/account_controller'
import { UtilController } from './controller/util_controller'
import { MultisigWallet } from './controller/multisig_controller'
import Web3, { HttpProvider } from 'web3'


const app = express()
const port = 8045

app.use(express.json({limit: '5mb'}));

const wallet = new WalletController()
const transactions = new TransactionController()
const contract = new ContractController()
const account = new AccountController()
const util = new UtilController()
const multisig = new MultisigWallet()


app.post('/multisig/create', multisig.create)
app.post('/multisig/add-owner', multisig.addOwners)
app.post('/multisig/remove-owner', multisig.removeOwner)
app.post('/multisig/replace-owner', multisig.replaceOwner)
app.get('/multisig/get-owners', multisig.getOwners)
app.post('/multisig/get-required', multisig.getRequired)
app.post('/multisig/change-requirement', multisig.changeRequirement)
app.post('/multisig/submit-transaction', multisig.submitTransaction)

app.get('/wallets', wallet.index)
app.get('/wallet/create', wallet.create) // done
app.get('/wallet/balance/:address', wallet.balance) // done

app.get('/accounts', account.index) // done
app.get('/account/create', account.create) // done

app.get('/transactions', transactions.index) // done
app.post('/transaction/create', transactions.create) // done
app.get('/transaction/:tx_hash', transactions.transaction)

app.get('/contracts', contract.index)

app.get('/util/node-info', util.node_info) // done
app.get('/util/block-number', util.block_number) // done


app.listen(port,()=>{
    console.log(`server listen on: http://localhost:${port}`);
})


