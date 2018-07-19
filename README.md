# Blockchain

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





















