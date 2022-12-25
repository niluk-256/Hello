const abi = require("./abi")
require("dotenv").config()
const ethers = require("ethers")



//We need the abi
const contractABI = abi
//also a provider
const provider = new ethers.providers.AlchemyProvider(
  "goerli",
  process.env.TESTNET_ALCHEMY_KEY
)
//and then we need a wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

async function main() {
  const hello = new ethers.Contract(
    "0xf7cEe48D129e51726318D95208842993b4348d5a",
    contractABI,
    wallet
  )

  const me = await hello.getAdmin()
  console.log("My EOA Wallet address:  " + me)
  const bytes32 = await hello.getMe()
  console.log("My Byte32 :  " + bytes32)
  const myBalance = await hello.getBalance()
  const balance = ethers.utils.formatEther(myBalance)
  console.log("ETH BALANCE : " + balance)
  //---------------------------------
  function hex_to_ascii(str1) {
    var hex = str1.toString()
    var str = ""
    for (var n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
    }
    return str
  }
  //--------------------------------------
  const myReal = hex_to_ascii(bytes32)
  console.log(myReal)
}

main()
