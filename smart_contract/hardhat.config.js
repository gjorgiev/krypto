// https://eth-ropsten.alchemyapi.io/v2/UMRdod4eSAVQ4ttcoYj_0ddiO4felNpv

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UMRdod4eSAVQ4ttcoYj_0ddiO4felNpv',
      accounts: ['81978eb96a2768787687f069c52f5908d2084069317a0b6e34ad8af213cc50fc'],
    }
  }
}