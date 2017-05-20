// Step 1: Get a contract into my application
var json = require("./build/contracts/MyContract.json");

// Step 2: Turn that contract into an abstraction I can use
var contract = require("truffle-contract");
var MyContract = contract(json);

// Step 3: Provision the contract with a web3 provider
MyContract.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));


window.onload = function() {
	console.log( "Account" + web3.eth.accounts[2] );

	MetaCoin.deployed().then(function(instance) {
	    return instance.getBalance.call(web3.eth.accounts[2]);
	}).then( function(balance) {
	    document.body.innerHTML = document.body.innerHTML  + " balance " + balance;
	});

};
