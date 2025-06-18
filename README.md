# Ethereum-Voting-DApp

---

## 🔍 Overview
VoteWise is a beginner-friendly, end-to-end decentralized application (DApp) built on Ethereum using Solidity, HTML, JavaScript, and Web3.js. It enables users to cast votes for a candidate and check how many votes any candidate has received, stored securely on the blockchain.

## 🚀 Features
- Vote for any candidate using their name.
- Fetch real-time vote counts from the blockchain.
- Interacts with deployed smart contract using Web3.js and MetaMask.
- Fully functional on local development server (via localhost).

## 🛠 Tech Stack
- Solidity – Smart contract language
- JavaScript – Frontend interaction logic
- Web3.js – Blockchain connection
- MetaMask – Wallet & network bridge
- HTML/CSS – UI and styling

## 📂 Project Structure"
```
└── ganeshkantle-ethereum-voting-dapp/
    ├── README.md
    ├── app.js
    ├── index.html
    └── package.json
```

## 🧪 How to Run Locally

### 1. Compile & Deploy the Contract
Use Remix IDE or local Hardhat setup to:
  - Compile Voting.sol
  - Deploy it to a local network (e.g., Ganache)
  - Copy the deployed contract's address and ABI

### 2. Set Up the Frontend
#### Update the following in app.js:
```
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = YOUR_CONTRACT_ABI;
```

### 3. Start a Local server
#### Use VS Code Live Server or Python:
```
# If using Python 3
python3 -m http.server 8080
```
Open http://localhost:8080 in your browser.

### 4. Connect with MetaMask
  - Add your local blockchain as a custom network in MetaMask.
  - Import your Ganache account/private key to MetaMask.
  - Approve interactions when prompted.

### ✅ Result
  - Voting and checking functionality fully integrated.
  - Real blockchain transactions confirmed through MetaMask.
  - Clean, minimal UI focused on functionality.

## Contributing
If you'd like to contribute, please fork the repository and submit a pull request. All contributions are welcome!

## Contact
For any queries, feel free to reach out:
- **Email:** ganeshkantle@gmail.com
- **My Portfolio:** (https://ganesh-portfolio-dusky.vercel.app/)
