import express from 'express'
import { WalletController } from './wallet'
import { TransactionController } from './transactions'
import { ContractController } from './contract'
import { AccountController } from './account'
import { UtilController } from './util'
import { MultisigWallet } from './multisig'


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
app.post('/multisig/owners', multisig.getOwners)
app.post('/multisig/add-owner', multisig.addOwners)

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