const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
          return new HDWalletProvider("base pill sample dizzy ginger mix stage pigeon woman dumb spray glimpse", "https://rinkeby.infura.io/v3/69ebae14282443dca357800a384063ea")
        },
        gas: 6721975,
        gasPrice: 20000000000,
        network_id: "4",

  
       }
  },
  compilers: {
      solc: {
         version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
        // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        // settings: {          // See the solidity docs for advice about optimization and evmVersion
        //  optimizer: {
        //    enabled: false,
        //    runs: 200
        //  },
        //  evmVersion: "byzantium"
        // }
      }
    }
};