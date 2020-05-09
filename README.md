# Blockchain Supply Chain Solution

This repository contains an Ethereum DApp that demonstrates a Supply Chain flow from a farmer to a consumer. The user story is similar to any commonly used supply chain process. A farmer produces and sells items which are bought, received and sold by the distributor. The retailer buys from the distributor and sells to teh consumer.

## Project Writeup
Diagrams: Contained in the Diagram Folder

### Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

Rinkeby Address: 0xdF0D53301f94123e05aD8d87e8bcb152Af4d9bc3
ContractID: 0xdf22d681c8e5fa6da47c97d7e7c7ccfb4b033266
Transaction Hash: 0xeb4367155b843f89c042147b4a932e3529391c013cd483251a0bc819b2448f2f

### Versions
Compiler: solc: 0.5.0+commit.1d4f565a.Emscripten.clang

ganache-cli: 6.9.1


Truffle: v5.0.16

Node: v11.3.0

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/Ezeebube5/blockchain-supply-chain-solution.git
```

Install all requisite npm packages (as listed in ```package.json```):

```
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```


Test smart contracts:

```
truffle test
```

All 10 tests should pass.


In a separate terminal window, launch the DApp:

```
npm run dev
```




## Acknowledgments
* Udacity: Provided starter code and lesson examples.
* Solidity
* Ganache-cli
* Truffle
* IPFS
