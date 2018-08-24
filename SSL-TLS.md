
<details>
         <summary> TLS Encryption</summary>

* SSL Came first time in 1994. They build a specific navigator inside their browsers that other browsers didnt have and encorporated into thier browser. 
* In 1999 Microsoft found they need it but didnt want to use the name SSL from Netscape so they named it TLS but people still saying SSL. After all we have TLSv1.3 and enabled in browsers. 
 * Data Encryption , Key Exchange and Handshake  are three main parts of TLS
 #### Data Encryption
 * Protocols are the ones that encrypt data. 3des(168 bits) means des uses 3 times encryptign data with 3 secret keys. Then AES (128 or 256 bits) came in which is US government standard protocl now and replaces des. Then we add `GCM galwas counter mood` or `CBC cipher block chaining`. Then the sender can add some message then receiver through these two can notify no one tampered with encrypted message along the path. Chacha20 is another way which uses poly1305 to add integrity check like CBC
 * To read AES encrypted message receiver needs a secretkey. The `Symetric Encryption` came from here when both client and server needs same key. ![Encrypted key]()
  #### Key Exchange
 * But we can not pass the secret key through the web because it is not safe. So how end point can have the same key? here is `key exchange` protocle came in. So we need that protocl, there are some solutions like `RSA` which two parties exchange some numbers and then they both have a number that never shared. `Diffie-Hellman DH` is another protocl to exchange public and private key. 
 * `RSA` is another integrity checker for `DH`. One of the modern key exchange protocl is `(Elliptical Curve Diffie-Hellman ECDH)`. 
 This is DH except it add some EC to it. The only difference is ECDH provides an ecryption no one with current machines can reverse engineers them. And signed in with RSA as below is great but not all browsers support it. 
 ![Key Exchange]()
 * In order to get secret key on both sides we have below transactions. When we connected to HTTPS server, server send us a certificate which contains two large prime numbers (p and g). 
 for simplicity here two prime numbers are choosen small
 * Then client choose a private key. Then we use a simple formula which results here is 5. then we send it to server. Then server is using same mathmatic by choosing a private key 6. 
 ![prime numbers]()
 At the end we have two private keys and two encrypted keys at both sides. Everybody on the internet would know about all these numbers except private keys. And magic is here to get our session key we calculate it as below.
 ![129] ()
 So we use this session key to encrypt our data to communicate. 
 
</details>
