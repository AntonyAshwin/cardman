const SimpleStorage = artifacts.require("String");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};