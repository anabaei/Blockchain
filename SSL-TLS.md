
* SSL vs SSH (Secure Shell). They both looks like each other unless SSL is working with sockets and SSH works with shell only. A formal defination is SSL Secure Socket Layer is a certificate for protecting data on the net, SSH, Secure Shell, is a network application used to transfer or share data with a remote computer
<details>
         <summary> TLS Encryption</summary>

* SSL Came first time in 1994. They build a specific navigator inside their browsers that other browsers didnt have and encorporated into thier browser. 
* In 1999 Microsoft found they need it but didnt want to use the name SSL from Netscape so they named it TLS but people still saying SSL. After all we have TLSv1.3 and enabled in browsers. 
 * Data Encryption , Key Exchange and Handshake  are three main parts of TLS
 #### Data Encryption
 * Protocols are the ones that encrypt data. 3des(168 bits) means des uses 3 times encryptign data with 3 secret keys. Then AES (128 or 256 bits) came in which is US government standard protocl now and replaces des. Then we add `GCM galwas counter mood` or `CBC cipher block chaining`. Then the sender can add some message then receiver through these two can notify no one tampered with encrypted message along the path. Chacha20 is another way which uses poly1305 to add integrity check like CBC
 * To read AES encrypted message receiver needs a secretkey. The `Symetric Encryption` came from here when both client and server needs same key ![Encrypted key](https://user-images.githubusercontent.com/7471619/44601080-3c15f000-a790-11e8-90f9-87a3c2c32ab0.png)
  #### Key Exchange
 * But we can not pass the secret key through the web because it is not safe. So how end point can have the same key? here is `key exchange` protocle came in. So we need that protocl, there are some solutions like `RSA` which two parties exchange some numbers and then they both have a number that never shared. `Diffie-Hellman DH` is another protocl to exchange public and private key. 
 * `RSA` is another integrity checker for `DH`. One of the modern key exchange protocl is `(Elliptical Curve Diffie-Hellman ECDH)`. 
 This is DH except it add some EC to it. The only difference is ECDH provides an ecryption no one with current machines can reverse engineers them. And signed in with RSA as below is great but not all browsers support it. 
 ![Key Exchange](https://user-images.githubusercontent.com/7471619/44601177-85663f80-a790-11e8-8ecd-28ced8387658.png)
 * In order to get secret key on both sides we have below transactions. When we connected to HTTPS server, server send us a certificate which contains two large prime numbers (p and g). 
 for simplicity here two prime numbers are choosen small
 * Then client choose a private key. Then we use a simple formula which results here is 5. then we send it to server. Then server is using same mathmatic by choosing a private key 6. 
 ![prime numbers](https://user-images.githubusercontent.com/7471619/44601242-b47cb100-a790-11e8-8f40-57bea05f3bee.png)
 At the end we have two private keys and two encrypted keys at both sides. Everybody on the internet would know about all these numbers except private keys. And magic is here to get our session key we calculate it as below
  ![129](https://user-images.githubusercontent.com/7471619/44601283-cf4f2580-a790-11e8-97e6-5a04c920e35a.png)
 So we use this session key to encrypt our data to communicate. 
 #### Handshake Integrity
 * In order to TLS to operate we need this process. TLS grab each header then combine those into digest and then run through a Secure Hash Algorithm SHA and then add it to last massage of hanshakes to make sure the shandshake itself is not tamperd the process if someone tamperd we start it again
 #### Certificates
 * Certificate contains public keys with two large prime values and verification information which is a part of certificate chain. It means there is a chain of authority in certificates that we can do some mathematics to make sure that the certificate is issued by valid authority. 
 * In order to have certificate chain we need certificate authority server. We can setup our own certificate server using `open SSL` to generate certificate to own network. If we want we can have this as public by purchasing online certification. Then they publish some information out there into our browser to allow us that verify that web server is browsing to you are actually what they say they are
 
 </details>
<details>
         <summary> TLS Handshake </summary>
 
 * So After sending SYN message, receving SYN ACK and sending ACK then we stablish our source and destincation port numbers and sessions we are going to use to transfer our HTTPS trafic. In fact HTTP trafic rapped up inside of TLS in an encrypted way. Once three way handshake is done TLS wil kick in and send hello message to server as below
 ![handke](https://user-images.githubusercontent.com/7471619/44602607-eee84d00-a794-11e8-9a9e-d647ff10d986.png)
  Supported Cipher Suites have sessionid and URL of the server we communicate with. Then the server send back Hello to client. Then client select the highest version of TLS which both client and server supports.
  * Once the server done with Hello, it sends certificate to client. 
<details>
         <summary> Oauth 2, JWT Authentication method </summary>
 
 * Means users login into application, then front end send them to third pary server (OAuth Server), which is simple login page. Then after validation the temporary token access send to application. 
 
 * JWT: is a tool to security comunicate json between source and client. 
</details>
