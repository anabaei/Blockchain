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
* Set ethereum -> Network id is name of ethereum(10101010) and go with default which you end to see below [ethereum ]()


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





















