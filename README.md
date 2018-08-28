# Blockchain

* Blockchain is like a link list which we call nodes `merkle trees`.  Mining is verification transactions when we have nounce and data and correct hash required whch the action to get is mining. The valid hash depends on all previouse blocks. In ethereum data is a function. 
* Blockchain mit edu [link](http://blockchain.mit.edu/how-blockchain-works)
* Bitcoin wallet just manage the public id. Some ppl develop `proof of work` with smart contracts(ethereum) and chain code developer  (fabric)
 
## Fundamental Blockchain

<details> 
  <summary> Fundamental Blockchain </summary>
Different consensues:
* Proof of work: Is something that bitcoin does we have to do computation to update new block into blockchain
* Proof of stake: Tells which block is valid as much as high it is
* Proof of Burn: if you want to exchange your coin then you need to show you burned your current to get new coins instead
* Proof of space: It is the space of your computer disk. 
 
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
* Is a framework that allows us to compile, test and make deployment the contracts into the real world!. Also We can use Truffle in console without directing contacting contracts [truffle](https://github.com/trufflesuite/truffle/releases/tag/v4.0.0) and [this](https://truffleframework.com/docs/getting_started/project)
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
* We can remove not needed `deployer` to avoid expending unnecessary `ether` when deplying to production 
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
   host: "bc////-//////////////.azure.com",  // use ethereum RPC endpoint address the same for wallet 
   port: 8545,
   network_id: "*", // Match any network id
 gas: 4500000,
 gasPrice: 21000000000
  }
}
```
* one way to assign gasprice in tstrpc is running like `testrpc --gasLimit 6721975 --gasPrice 100000000000`
```java
truffle compile
truffle migrate --network production --reset .  // we get err since it is locked
// paste ssh end point at another terminal 
geth attach // is a javascript console that enable us to send data directly to blockchain 
personal.unlockAccount(eth.coinbase)  // to unlock default account so as long as this window is open the account is unlock
truffle migrate --network production --reset // run it again 
```
* Now our contract is updated and running in production blockchain. To check it we can go to production console by 
```javascript
truffle console --network production --reset
> ScoreStore.deployed().then(function(deployed){ss=deployed;});
> ss.AddPersonScore("amirnabaei", 17);  // when setting variables we use direct call as here, if we wanted return then we add call as in dev environment we did (to get async handler back)
> ss.GetScore.call("amirnabaei");
```
* By passing above it says our ScoreStore program now running on blockchain and is ready to use 
#### Call External Contract
* We want to call contract a from contract b
* After running truffle init then create a contract 
First define a contract that resemble the contract we already have at another place to tell solidity about the structure of the contract we are going to use. We can define limited function in it. We call our interface IScoreStore. Since we are going to use only GetScore function so we just make a place holder of it first. MyGame is our contract which going to have a function showname using getName funciton from storescore contract. Inside ShowScore create instance of our interface and we call it scorestore.
```java
prgma solidity ^0.4.4;
contract IScoreStore{
   function GetStore(string name) returns (int);
 contract MyGame{
    function ShowScore(string name) returns (int)
    {
      IScoreStore scorestore = IScoreStore(passTheAddress from terminal by running  ScoreStore.deployed() in console mode)
      return scorestore.GetScore(name);
    }
 }
```
* Then to call the function we have these in console
```java
var mg
MyGame.deployed().then(function(deployed){mg-deployed;});
mg.ShowScore.call("amirnabaei").then(function(returnValue){console.log(returnValue);});
```
* In this way we can access to contracts that others that have made. 
</details> 

<details>
  <summary> Sample Application </summary>
  
  * Create End to End Application with Ethereum FoodSage
  * Ethereum JavaScript API is the one we use in console mode and we can use them in webpages. Web3.js in JavaScrpit API has all function we need like it calls RPC calls for us and another thing it work with Metamask API to do all authentications. We need to find who can do what instead of who the user is. 
  * In this case user is an ethereum account. Also `Webpack` a module bundler allows us to make javascript application unify and reduce complexity. It bundle all files and make it ready for execution on browser
   * In contract folder already has `Metacoin` contract sending and trade and has method to get data from specified address
 ```java
  truffle unbox webpack
  testrpc // anpther tab
  truffle compile // or develop 
  Truffle migrate
  npm run dev
  ```
  * Make sure your truffle.js connect to local network correctly and then connect metamask to local8545 as well 
 ```java
 module.exports = {
  networks: {
  development: {
  host: "localhost",
  port: 8545,
  network_id: "*" // Match any network id
 }
}
}
 ```
 * If you encounter error use [this](https://ethereum.stackexchange.com/questions/15937/truffle-sample-dapp-doesnt-show-metacoin-balance-when-metamask-is-active)
  * To test trading ether we use our account we have in our test server (from testrpc). copy private key and paste into `metamask -> import Account` then if you refresh page you see the updated metacoin, also you can send to any accounts in metamask from this page as well. 
  
  #### FoodSafe 
  * This app uses ethereum blockchain to store information or is a food tracking app. Also we learn how to keep secrets into blockchain
  * For each new batch of product we will be adding new contract to the chain instead of trackin gall products with the same contract and application is able write and read information into contracts(including secretes and public info)
  * First create a contract and test it with TestRPC and verify
  *  Make foodSafe contract as [this](https://github.com/anabaei/Blockchain/blob/master/demo/foodsafe/contracts/FoodSafe.sol) and deployed it to migrates and then compile and migrate it while running testrpc
  * then inside `truffle console` 
  ```java
  var fs
  FoodSafe.deployed().then(function(deployed){fs=deployed;});
  fs.AddNewLocation(1000, "The Producer", "Not very secret secret ...");
  fs.AddNewLocation(2000, "The Supplier", "Still Not very secret secret ...");
  fs.AddNewLocation(3000, "The Store", "Even Still Not very secret secret ...");
  fs.GetLocation.call(0).then(function(retval){console.log(retval);});   //get first location 
  fs.GetLocation.call(1).then(function(retval){console.log(retval);});   //get second location 
  ```
  * Now it is ready and time to upload into blockchain
  #### Embed Metamask in app
  * inside `index.js` add default account for everycall that made. We want to compile and send out contract directly to the blockchain via javascript rather than truffle to use it as we done before
   ```java
   web3.eth.defaultAccount = account
  ```
  * To compile it we need to use solc(solidity compiler) instead of truffle so we need to install it in our transaction node. 
  * The way to access to transaction node is via `ssh` and we get ssh command from Azure as we done before and fire it up in terminal.
  * First we need to set a repository right, and set it to ethereum and add yes 
  ```java
 sudo add-apt-repository ppa:ethereum/ethereum -y  
 sudo apt-get update 
 sudo apt-get install solc -y    // this is actual install 
  ```
  * We need to get defination of our contract into a variable, one way is to make it in oneline by removing all line breaks and copy into index.js as 
  ```java
      web3.eth.defaultAccount = account
      var foodSafeSource=" paste here!"
      web3.eth.compile.solidity(foodSafeSource, function(error, foodSafeCompiled){
      foodSafeABI = foodSafeCompiled['<stdin>:FoodSafe'].info.abiDefinition;
      foodSafeContract = web3.eth.contract(foodSafeABI);
      foodSafeCore = foodSafeCompiled['<stdin>:FoodSafe'].code;
  ```
  * And add the funciton as 
  ```java
  createContract: function(){
    foodSafeContract.new("", {from:account, data:foodSafeCode, gas:3000000}, function(error, deployedContract){
        if(deployedContract.address)
        {
          document.getElementById("contractAddress").value=deployedContract.address
        }
    }) 
  },
  ```
  * Then inside index.html
  ```javascript
  <input id="contractAddress" type="text"></input>
  <button id="createContract" onclick="App.createContract()"> New Contract</button>
  ```
  
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

<details> 
 <summary> Install Cassandra on Linux ubunto   </summary>

* `sudo apt install openjdk-8-jre -y`
* useful [link](https://www.vultr.com/docs/how-to-install-apache-cassandra-3-11-x-on-ubuntu-16-04-lts)
 
</details>


<details>  
  <summary> AWS</summary>
 
  * A good AWS reference for [node](https://node.university/blog/1001486/aws-ec2-hello-node)
  * To donwload latest node we can have
  ```javascript
  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```
  * from [here](https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version)
  
  * To run the app in AWS you need to use npm i -g pm2@2.4.3 which is [here](http://pm2.keymetrics.io/)
  * If running pm2 has issue you can find it and export the running path into `~/.bashrc` as
  ```java
  whereis pm2
  export PATH=$PATH:/opt/... // the location we found 
  source ~/.bashrc // to rerun the bash file or you can exit and log in again 
  pm2 logs  /// display errors 
  ```
  * One err that killed me in node js 
  ```
  SyntaxError: Block-scoped declarations (let, const, function, class) 
  ```
  solution :
  ```
  ```
  * In order to download cassandra needs ruby first then go to this [link](https://gist.github.com/virajkulkarni14/1f79175ddbb2a0595118be8a9431f4bd)
  * To download ruby use `sudo yum install ruby` `ruby --version` and for cassandra you need pip so `sudo easy_install pip`
  * loging aws -> Select EC2 (like running on cloud)->  Running instance -> ubuntu 16.04 LTS -> Instance Type (12micro) -> add storage 100gb -> add security groups (all trafics) and ip from any where -> choose existence keypair (keypair is a key to connect existed instance -> then run 
  * It takes 24 hrs to syncronize, In order to browse and see UI with the instance we use `Public DNS` . Click right on the instance and select `connect`. so if you for example downloaded keypair in desktop go terminal desktop and follow ssh like 
  ```java
  chmod 400 yourifle.pem
  ssh -i "yourifle.pem" ubuntu@ecxxxxxxxxxxxxxxxxxxxxxxxxpute.amazonaws.com
  ```
 * Now you have connected to your instance!
 * you can use tutorial  below to install bitcore and its interprettors to accept bitcoin in your app
 * login to aws from console 
 * then cloning nvm to make sure you have node --version 4 above 
 * Then install build essential tools 
 * We use Nodejs to make in future bitcoin wallet. We use bitcore which is just a wraper to bitcoin core code annd [bitpay](https://bitpay.com/) to buy bitcoin with usd. 
 * 
  </details>
  
  <details>
  <summary> Tutorial </summary>


```linux
ssh -i "bitcoinomni.pem" ubuntu@ec2-35-163-69-172.us-west-2.compute.amazonaws.com

/// below cloning nvm to have it in our instance
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash 
// if not working says wget not found so download it as below 
sudo yum install wget
The script clones the nvm repository to ~/.nvm and adds the source line to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

// then we export nvm to part 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

// type nvm in terminal you should see it is running 
nvm install v4  // for other purposes to run: need nvm i v8 
// if apt-get not working try using yum since amazon is on RedHat base  
sudo apt update
sudo apt-get install libzmq3-dev build-essential 
 
sudo apt-get install git /// to install git or use sudo yum install git

sudo apt install node-gyp  // this is c++ interpretter 
npm -g install bitcore@4.1.0


bitcore create mynode --testnet  // this create mynode folder 
// bitcored
or 
//bitcore create -d <path-to-datadirectory> mynode

cd mynode
vi bitcore-node.json  // network is testnet but you can change it to livenet which connect to main bitcoin because it takes time 
bitcore install insight-api insight-ui   // allows you to install ui to track blockchian
bitcored  ///run the app with below address 
url = public DNS(IPv4):3001/insight

// enter interactive node shell
cd mynode 
node

// load the bitcore lib
var bitcore = require('bitcore-lib');

// make a random 32 byte number. First we create a private key and to generate public address we have private key and hash it and then 
// make it humanread able. 
var rand_buffer = bitcore.crypto.Random.getRandomBuffer(32);

// convert to a number format
var rand_number = bitcore.crypto.BN.fromBuffer(rand_buffer);

// print out the number
rand_number

// print in decimal
rand_number.toString()

// use that number to create a Bitcoin address -- DON'T USE THIS ADDRESS ANYWHERE!
/// we use this random number and give it to privatekey function to create a private key in address which starts with one indicating this is bitcoin address 

var address = new bitcore.PrivateKey(rand_number).toAddress();

// make a testnet Bitcoin address 
// now we generate an address for test net which would be different than the above address and starts with n not 1 to show this is for network
var address = new bitcore.PrivateKey(rand_number).toAddress(‘testnet’);

> var bitcore = require('bitcore-lib');
undefined
> bitcore.PrivateKey('testnet').toWIF()
'cSyUmWBHT8nufD3opBTeb66uikCtKgddAjeNjfXhcwq3eLM5Ft5w'

npm install bitcore-explorers --save

ssh -i "bitcoinomni.pem" ubuntu@ec2-34-217-8-51.us-west-2.compute.amazonaws.com

```
* chmod just for you may forgot
![here](https://user-images.githubusercontent.com/7471619/44355026-410d3380-a460-11e8-8679-5428d55d7af6.png)
  
  </details>

<details>
  <summary> Hierarchical Deterministic Wallets </summary>

* When we have a public key and designed other nodes, we can create their private keys from adding private master key pluse thier public key. Then in an enterprise which produces blocks with private keys, even if users forget their private keys we can determine them by having own private key and formula.
* You have one key (master key) and multiple by G ( an elliptic curve funciton and not a simple arithmatic maniplication) then you get the public key. For other branches under master you have new public key equals to two previouse public keys. Since each public key is multiple of private key by G then we can guess private key of new node by others
![pic](https://user-images.githubusercontent.com/7471619/44353165-14a2e880-a45b-11e8-8ca7-da80482b8cb6.png)
* Bitcoin cash is faster because it does not work with all blocks it just connect with the like coffee shop channel and do the transaction with. So we hve sidechain which contain all transactions between chains. 
  </details>

<details> 
  <summary>  Byzantine General problem  </summary>
 
 * If one block get two different orders from two blocks which they supposed to be the same, so it is confusion here. But bitocin have solution here.
 * It is called practical byzentine fault tolerance (PBFT). Three example of blockchain rely on PBFT are `Hyperledger, Stellar and Ripple`
 * Each general maintains an internal state (ongoing specific informaiton or status). When a general receive a message in conjunction with their internal state to run a computation. Which it made to have individual decisions. Then it shares the decision with all the other generals in the system and a consensus decision is determined based on the total decisions submitted by all generals.
 * We can write our own hyperledger of fabric for PBFT
 
 </details>

* Then from the account you can use fabric on top of it
<details> 
  <summary>  HYPERLEDGER, FABRIC, COMPOSER, SAWTOOTH  </summary>
  
  [HYPERLEDGER](https://www.hyperledger.org/) home page. FABRIC is enterprise level framework which use permision to channel support. 
  
</details>  






















