const Web3 = require("web3");
const truffleContract = require("truffle-contract");
const convertLibJson = require("../contracts/ConvertLib.json");
const ConvertLib = truffleContract(convertLibJson);
const metaCoinJson = require("../contracts/MetaCoin.json");
const MetaCoin = truffleContract(metaCoinJson);
const migrationsJson = require("../contracts/Migrations.json");
const Migrations = truffleContract(migrationsJson);

// Supports Mist, and other wallets that provide 'web3'.
if (typeof web3 !== 'undefined') {
    // Use the Mist/wallet provider.
    web3 = new Web3(web3.currentProvider);
} else {
    // Use the provider from the config.
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}
[ConvertLib, MetaCoin, Migrations].forEach(function(contract) {
    contract.setProvider(web3.currentProvider);
});

web3.eth.getAccountsPromise = function() {
    return new Promise(function (resolve, reject) {
            try {
                web3.eth.getAccounts(function (error, accounts) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(accounts);
                    }
                });
            } catch(error) {
                reject(error);
            }
        });
};
var accounts;
var deployed;
//console.log(web3.eth.accounts);
web3.eth.getAccountsPromise()
    .then(_accounts => {
        console.log(_accounts);
        accounts = _accounts
        return MetaCoin.deployed();
    }).then(_deployed => {
    	deployed = _deployed;
    	return deployed.getBalance.call(accounts[0], {from: accounts[0]});            
    })
    .then(function (balance) {
        console.log("balance: " + balance.toString(10));
    })
    .catch(function (err) {
        console.error(err);
    });