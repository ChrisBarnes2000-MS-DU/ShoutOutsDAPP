const ShoutoutContract = artifacts.require("Shoutouts");

module.exports = function (deployer) {
    deployer.deploy(ShoutoutContract);
}