
const storageContract = artifacts.require('./storagecontract');

module.exports = function (deployer) {
  deployer.deploy(storageContract);
};


