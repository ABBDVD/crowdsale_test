// var ERC20 = artifacts.require("./ERC20.sol");
// var SafeMath = artifacts.require("./SafeMath.sol");
// var SafeERC20 = artifacts.require("./SafeERC20.sol");
// var StandardToken = artifacts.require("./StandardToken.sol");
var SimpleToken = artifacts.require("./SimpleToken.sol");
var Crowdsale = artifacts.require("./Crowdsale.sol");


module.exports = async function(deployer) {
  // deployer.deploy(ERC20);
  // deployer.deploy(SafeMath);
  // deployer.deploy(SafeERC20);
  
  // deployer.deploy(SimpleToken).then(function() {
  //       return deployer.deploy(Crowdsale, 1, web3.eth.accounts[0], SimpleToken.address);
  //       // (uint256 _rate, address _wallet, ERC20 _token
  //   });
  let token = await SimpleToken.new();
  let crowdsale = await Crowdsale.new(new web3.BigNumber(1), web3.eth.accounts[0], token.address);
  await token.transfer(crowdsale.address, new web3.BigNumber('1e22'));
  // deployer.deploy(Crowdsale, );
  // deployer.link(SafeERC20, Crowdsale)
  // deployer.link(SafeMath, Crowdsale);
  // deployer.link(ERC20, Crowdsale);
  // deployer.link(StandardToken, SafeERC20)
};





