
 
   
   var bitcoin = require("bitcoinjs-lib");
   var keypair = bitcoin.ECPair.makeRandom();
   var address = keypair.getAddress();
   console.log(keypair.toWIF());
 var vanity = address.substring(0,10); 
console.log(vanity);
