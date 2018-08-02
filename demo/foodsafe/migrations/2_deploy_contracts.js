// var ConvertLib = artifacts.require('./ConvertLib.sol')
var FoodSafe = artifacts.require('./FoodSafe.sol')

module.exports = function (deployer) {
  // deployer.deploy(ConvertLib)
  // deployer.link(ConvertLib, MetaCoin)
  deployer.deploy(FoodSafe)
}
