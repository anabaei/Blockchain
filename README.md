# Blockchain

* Blockchain development is the next big thing after invention of Internet
* With blockchain you can transfer a large money almost instanly to even war foriegn countries and transfer money directly to the device or certifications and secure information in blockchain and even control your virtual products like musicions. 
* 

## Fundamental Blockchain

<details> 
  <summary> Fundamental Blockchain </summary>

* Blockchain is Global singleton and unstoppable and no single point of attack. 
* Bloc: has data, a hash, number(order in chain), timestamp, and the hash of the previous block.
* Data save into block is accessible to everyone accessing the chain. There are two ways to make private data on blockchain
* 1 - Obfuscation: Means make data relevant to those who know that meaning like bitcoin 
* 2 - Encryption: We can encrypt the block so only the ones has key can access to block. One of the most secure hashing standard is Advance Encryption Standard (AES). Take our original message and produce a new hash. 

### Public/private 
* Public: Available to everyone, expensive transactions and storage. 
* Private: Not distributed and similar to traditional database. You can control cost and who can access the data


</details> 


<details> 
  <summary> Ethereum</summary>

* Is a platform and program languages available since 2015. It is programming language. It has it's own crypto currency called Ether same as bitcoin and is fast response so it is good for applications. 
* Ethereum goal applications and good comunity support 
* Smart contract: are peices of codes lives on blockchain, they read other contracts, make decision, send ether and execute other contracts. 
* `Gas` is internal pricing for running contracts in ethereum and the amount of gas depends on Computation memory bandwidth storage.  
* `Transaction` sending package of data from one account to another including `recipeint, signature,value, gasprice, startgas, message`
startgas is maximum cost of gas which may be used and gasprice is the amount we ready to pay ![alttext](https://user-images.githubusercontent.com/7471619/43428209-0ce33e82-9412-11e8-979b-146e2f77125d.png)
* Ethereum on Microsoft Azure. Consortium means collboration between supporting members of blockchain with underlying infrastructure. 
* It starts with consortium leader and consorium members can join it. 
* The application should allow to call a VPN. And VPN call to one of transaction nodes. Nodes which handling transactions are isolating from mining nodes and mining nodes are not accessible from outside of Virtual Private Network. This is all we need to operate a block chain. ![Axe Miners](https://user-images.githubusercontent.com/7471619/43428217-18a38574-9412-11e8-8042-7803a32e7536.png)
* Blochchain consortium on Azure and let Azure create Genesis block feeding it with some ether for us. And to prove that everything works we transfer ether between two accounts
* On Azuer -> Portal -> + -> ethereum -> select ethereum consorium leader(Ethereum Proof-of-Work Consortium) -> bcl prefix -> gethadmin VM user -> resource group choose blockchain(to share same policy, life cycle and permissions) -> number of mining nodes(choose min 2) -> keep defaults with 1 node 
* Set ethereum -> Network id is name of ethereum(10101010) and go with default which you end to see below ![ethereum](https://user-images.githubusercontent.com/7471619/43430858-ed18e15c-941f-11e8-9235-8eeb2384b12a.png)
* After downloading -> select deployment -> select microsoftazure.blockchain-multimember-blo -> then we see everything we need
* Link to ceate a [blockchain](https://docs.microsoft.com/en-us/azure/blockchain-workbench/ethereum-deployment-guide)
* Then inside `ADMIN-SITE` in My account address we get an ether to get block chain started

#### Wallet 
* We use metamask chrome app extension. After downloading and creating a new pass account, then go to settings to connect to our newly created blockchain. Paset RPC URL and save it, then you refresh metamask and back you are connected seeing this 
![here](https://user-images.githubusercontent.com/7471619/43487285-0c96363c-94cb-11e8-9ef3-b8404e89699e.png)
* To add etherem copy address and paste it in admin page and click submit  and then you see the results in wallet as 
![here](https://user-images.githubusercontent.com/7471619/43488038-41919258-94cd-11e8-8f77-19b8ff544a34.png)
* Copy address from Ethereum RPC Endpoint and use it in wallet application called metamask which is a chrome extention app.  
* So far we created our own  blockchain on the Azure using consortium template. Then we transfered money between one wallet(one account) and another account. 
* We need some `npm install -g ethereumjs-testrpc` and `npm i -g truffle `

#### Smart Contracts
* We use `solidity` language to write contracts which is supported by ethereum and bitoin block chain. Then we must compile bitcode. We use a framework to compile the contract called `truffle`. After compiling successfully we upload it and wait to be mind then we can start interacting with it. It can be from a User Interface or directly through htttp post requests. 
* If you dont give size for `int` it uses max size (256). Also `solidity` has a data type name `address`. Also it has `Access Modifiers` to allow code access from where we expect only. `Private` means only this contract can be accessed and modified the information. `internal` means contracts which driving from this contract can access and `external` disallow internal access and only externals can access a simple contract is like below ![below](https://user-images.githubusercontent.com/7471619/43490458-9c277d10-94d5-11e8-8c37-2b3edab71d54.png)
#### Truffle & RPC
* Is a framework that allows us to compile, test and make deployment the contracts into the real world!. Also We can use Truffle in console without directing contacting contracts [truffle](https://github.com/trufflesuite/truffle/releases/tag/v4.0.0)  
* To test the contracts before releasing we need Test RPC. It is there to use local test blockchain. Test RPC implements `ethereumjs` which is the same set of structure in ethereum blockchain. It also created Test accounts for you with connected private keys 

#### Hello World Contract
* run in terminal `truffle init` then open in visual code 
* Create file `hellowrold.sol` in contracts folder as
```java
pragma solidity ^0.4.4;
contract HelloWorld
{
    function SayHello() returns (string)
    {
        return("Hello World");
    }
}
```
* Then need to create migration by adding these to migration files
```java
var Migrations = artifacts.require("./Migrations.sol");
var HelloWorld = artifacts.require("./helloworld.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloWorld);
};
```
* Then run `testrpc` to create acoutns and run on the server. Then we compile our solution by running `truffie compile`. After compile we ready to deploy contract into blockchain by
```java
truffle migrate --reset
```
* Now our contract successfully deployed to our block chain and you see the addresses.  It is ready to go create User interface but in truffle we can test it out in truffle console mode.
* Run `truffle console` and allow us to run javascript directly into our contract as ![here](https://user-images.githubusercontent.com/7471619/43498265-092e646c-94fb-11e8-8bef-39650660587c.png)
```java
HelloWorld.deployed().then(function(deployed){hw=deployed;});
hw.SayHello.call();
```
### Solidity
* `Structs` are custom defined types that includes several variables. Structs can also contain other structs
```java
struct Person
{
  unit age;
  bool isCool;
  address accountAddress;
}
```
* `Enum` is a list of finit set of values. 
```java
enum Gender {Male, Female, NotSpecific}
```
* `Arrays` has same data type `string[] names; string[4] person` 
*  `Mapping` for example `mapping(address => uint) public balance` have a list of currency addresses in an array of integers. To access it use the type to access it as `return balance[account.Address];`
* Only possiblity a code removed from blockchain is when the contract using `Selfdestruct` function as `selfdestruct(msg.sender)`. To clean a contract use `clean(objectArray)` and delete all store variables. Delete is less destructive than selfdestruct.
* `Throw()` can return error if something happend. 

### Data Location
* Default location of each data type can be changed but default is like as 
* `Memory`: parameters including return params are in memory
* `Storage`: default for local variable is storage and location is forced to state variable 
* `Call Data`: non modifiable nonpersistant area where functions and arguments stored
</details> 

<details> 
   <summary> Demo </summary>
* This Demo(ScoreStore) game is a simple contract for storage that is deploying to private Ethereum
* `truffle init` and create `ScoreStore.sol` and use mapping to map string to ints and save it as PersonScores

```java
pragma solidity ^0.4.4;
contract ScoreStore
{
    mapping(string => int) PersonScores;
    function AddPersonScore(string name, int startingScore){
        if(PersonScores[name]>0)
        {
            throw;
        }
        else{
            PersonScores[name] = startingScore;
        }
    }
    function GetScore(string name) returns (int){
        return PersonScores[name];
    }
}  
```
* Make sure your truffle.js is like 
```java
module.exports = {
   networks: {
   development: {
   host: "localhost",
   port: 8545,
   network_id: "*" // Match any network id
  }
 }
};
```
* Notice: If you run truffle develop you don't need testrpc anymore. Since truffle develop runs on port 9545 you have to modify your truffle.js
* Then write it in migarate file and then 
```java
truffle compile 
testrpc  // keep it running 
truffle migrate --rebase 
truffle console 
 > var ss //add async to a variable 
 > ScoreStore.deployed().then(function(deployed){ss=deployed;});
 > ss.AddPersonScore("amirnabaei", 17);
 >  ss.GetScore.call("amirnabaei"); // Check to see if it got stored 
```
* Now we know our code works lets publish it into a blockchain. For this add production section to truffle.js as 
```java
 network_id: "*" // Match any network id
  },
   production: {
   host: "bclqsu-dns-reg1.westus.cloudapp.azure.com",  // use ethereum RPC endpoint address the same for wallet 
   port: 8545,
   network_id: "*" // Match any network id
  }
}
```
* 
```java
truffle compile
truffle migrate --network production --reset .  // we get err since it is locked
// paste ssh end point
geth attach // is a javascript console that enable us to send data directly to blockchain 
personal.unlockAccount(eth.coinbase)  // to unlock default account so as long as this window is open the account is unlock
```
* one way to assign gasprice in tstrpc is running like `testrpc --gasLimit 6721975 --gasPrice 100000000000`
* 

</details> 

## Big Idea

<details> 
   <summary> Bitocin </summary>
 
* Owner of a video sharing channel create a unique bitcoin just for the connection and when the money arrives unlock it 
* Bitcoin in s decentralized digital currency allows people to transfer money as easily as sending email 
* Bitcoin transations are irreversable. It is maintain by a newrok of ppl called `bookkeepers` who running bitcoin server node software and anyone can participate and each bookkeeper has a `Ledger`.
* When Bob wants to transfer `5.2` amount of bitcoin to Carol he broadcasts a transaction message which contains his account number, Carol account number and the amount of the money. Bookkeeper received the message and adjust it's `Ledger` then they pass the transaction to other bookkeepers to update their `ledger`. 
* Bitcoin is just a group of people maintaining a `Ledger`
* `blockchain.info` displays the transaction on bitcoin.
* Usefull links [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) , [bitcoin](http://bcoin.io/) , [bitcoin-github](https://bitcoinj.github.io), Ethereum: [etherum](https://github.com/ethereum/go-ethereum), [ethereum](https://geth.ethereum.org/),
Monero:
- https://github.com/mymonero/mymonero-core-js
Dash:
- https://github.com/dashevo/dashcore-lib
 </details>
 
 <details> 
   <summary> Cryptocurrency </summary>
   
   * Bitcoin relies on several cryptographic algorithms. When Bob sending transaction sending money he signs with cryptographic digital signature so the bookkeeper can authorized bob for that transaction. Cryptographic digital signature does the same thing that a real signature doing to prove authorization. 
   * Digital signature relies on public key encryption. Each bitcoin account or address is basickly a `public key` and `private key` is a password to generate signature to spend money
   * Security: Since it is decentralized action so we need voting system for go with majority of legends. If you loose your password as private key you loose the money you have in bitcoin. It requires at least an hour after transaction to make sure network fully agreed with on and accepted.
   * To buy bitcoin go to `https://www.coinbase.com/` or you can see all atms from `https://coinatmradar.com/` 
   * Bitcoins keeps in wallets like `mycelium` app and presented with QR code. The QR code is updated when you change the amount. They also can be on the website like `blockchain.info`. A wallet is a private key.  Also you can generate a `paper wallet` which is the private key and it's associated bitcoin address at `https://bitcoinpaperwallet.com/` or `bitaddress.org`. It is better to keep a backup which sometimes includes 12 words
   * Accepting Bitcoin on Website. In `Bitpay` go to payment tools> button> fill the form> paste HTML. This allow you accept bitcoin  
   * `mycelium` is another one. After you install it in the phone. Widgets>html>export public key(starts with xpub>optional fields>copy html now. Private key is containing in my `mycelium` wallet. 
   * For donations you can use `bitcoinqrcode.org`. After pasting your public key gives a QR and just copy paste into you web. 
 </details>

 <details> 
   <summary> Bitcoinj </summary>
   
   
   * [Bitcoinj](https://bitcoinj.github.io/getting-started) implemented in Java 7 and can be used any languages that target the JVM
   
   ```javascript
   npm install bitcoinjs-lib
   node // go to node env to test
   var bitcoin = require("bitcoinjs-lib");
   var keypair = bitcoin.ECPair.makeRandom();
   var address = keypair.getAddress(); // create a fresh bitcoin address 
   console.log(keypair.toWIF()); // to wilde info private key for the bitcoin address 
   var vanity = address.substring(0,10);  // generate vanity 
   console.log(vanity);
   ```

  </details>  





















