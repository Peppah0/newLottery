const assert = require("assert");
const ganache = require("ganache-cli");
const fs = require("fs");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const bytecode = fs.readFileSync('./build/__contracts_greeting_sol_Greetings.bin');
const abi = JSON.parse(fs.readFileSync('./build/__contracts_greeting_sol_Greetings.abi'));
var accounts;
var greetings;
beforeEach(async () => {
accounts = await web3.eth.getAccounts()
greetings = await
new web3.eth.Contract(abi)
.deploy({
data: '0x'+bytecode,

arguments: ['Hello World']
}).send({
from: accounts[0],
gas:'1000000'
});

//console.log(accounts);
});
describe('Greetings',() => {
it('deploys a greetings contract', () => {
//console.log(greetings);
//console.log(greetings.options.address);
assert.ok(greetings.options.address);
});

});