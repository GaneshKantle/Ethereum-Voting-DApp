const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"; // your deployed contract address

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "getVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "votes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
;

let contract;
let accounts;

window.addEventListener("load", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      window.web3 = new Web3(window.ethereum);
      await ethereum.request({ method: "eth_requestAccounts" });
      accounts = await web3.eth.getAccounts();
      contract = new web3.eth.Contract(abi, contractAddress);
      console.log("Connected to MetaMask:", accounts[0]);
    } catch (err) {
      console.error("User denied MetaMask connection", err);
    }
  } else {
    alert("MetaMask is not installed. Please install it to use this DApp.");
  }
});

async function vote() {
  const name = document.getElementById("candidate").value.trim();
  if (!name) {
    alert("Please enter a candidate name.");
    return;
  }

  try {
    const tx = await contract.methods.vote(name).send({ from: accounts[0] });
    console.log("Transaction successful:", tx);
    alert(`Voted for ${name} successfully!`);
  } catch (err) {
    console.error("Voting failed:", err.message);
    alert("Voting failed. See console for details.");
  }
}

async function getVote() {
  const name = document.getElementById("candidate").value.trim();
  if (!name) {
    alert("Please enter a candidate name.");
    return;
  }

  try {
    const result = await contract.methods.getVotes(name).call();
    document.getElementById("result").innerText = `${name} has ${result} vote(s)`;
  } catch (err) {
    console.error("Fetching votes failed:", err.message);
    alert("Failed to fetch votes. See console for details.");
  }
}
