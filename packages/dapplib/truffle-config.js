require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note machine hope gesture case success topple'; 
let testAccounts = [
"0x9dd783de38f24099810e4c6d1041655e20712413dc1625886c3e699d29ee2f2b",
"0x0137e5de2ad7de729892001f9311f79e387de5e5685d0dcd39d3c89c233eebd4",
"0xa8b4117d45c7433cc7503658d07c24a8593fdf56d7d02e402dc49ab99f238f9e",
"0xff76b8fb14c52937548a5851eac56877911fd29b6f07bb07d987043cdd5d869a",
"0x7c660bc318f2326d178bd5f583162049d1893c2cb7702284333dcbbd91d10adf",
"0x934f887c91475f9d9607ad7bfe0fd3efc91fa0171e8c332cfdf12663547c901f",
"0x689be0253706e638b10419b6ef08961961b00c49698d23256ac100acddaf85ce",
"0x129a2d95803518b8b53a66e0848ecb9bee96e52d188fd29834446206ae831979",
"0x43f6d716dd18990b4df0eb37306759443f037377b7b62d45fb16542c5b04ef98",
"0x6b0461258f3b0c038e29f51e36cf4c97d5e3efc735312d53e6f945f992f73b74"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

