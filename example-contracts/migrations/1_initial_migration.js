var FixedToken = artifacts.require("./FixedTokenExample.sol");
var MintableToken = artifacts.require("./MintableTokenExample.sol");
var CrowdSale = artifacts.require("./CrowdSale.sol");
module.exports = function(deployer) {
  deployer.deploy(FixedToken,1000000000,"FixedTokenExample",8,"FTE")
  .then(()=>deployer.deploy(MintableToken,1000000000,"MintableTokenExample",8,"MTE"))
  .then(()=>deployer.deploy(CrowdSale)
};
