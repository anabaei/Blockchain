// Allows us to use ES6 in our migrations and tests.
require('babel-register')

// module.exports = {
//   networks: {
//     ganache: {
//       host: '127.0.0.1',
//       port: 8545,
//       network_id: '*' // Match any network id
//     }
//   }
// }

module.exports = {
  networks: {
  development: {
  host: "localhost",
  port: 8545,
  network_id: "*" // Match any network id
 }
}
}