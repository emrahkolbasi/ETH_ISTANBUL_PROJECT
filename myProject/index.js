import { ethers } from hardhat;
import { abi, contractAddress } from "./constants.js"


const rentButton = document.getElementById("rent")
rentButton.onclick = rentIt
const connectButton = document.getElementById("connectButton")
connectButton.onclick = connect

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" })
    } catch (error) {
      console.log(error)
    }
    connectButton.innerHTML = "Connected"
    const accounts = await ethereum.request({ method: "eth_accounts" })
    console.log(accounts)
  } else {
    connectButton.innerHTML = "Please install MetaMask"
  }
}


async function rentIt() {

    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer)
      try {
        const transactionResponse = await contract.rentIt(_rentData,_start,_end)

        await listenForTransactionMine(transactionResponse, provider)
      } catch (error) {
        console.log(error)
      }
    } else {
      fundButton.innerHTML = "Please install MetaMask"
    }
  }