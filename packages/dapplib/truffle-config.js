require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note peace purse install inflict slot gentle'; 
let testAccounts = [
"0x629cd502c625bb26a9158d228ede7ba4fc21438ebcdb19cc80be45945c70c393",
"0xdd4d34cf9898b57eee983306522e41685ab0262339a66f1bad39ac7c59a15546",
"0x56ff61e9d62853d0af98e86eae739f20f0efca013febd7c463440f273f082d94",
"0xfdee487a3e65ae27c10aa78bfea4e106d129b1f5bc4c21d89c7aebb516fd228d",
"0x66f3f7864794f0e19c267833732f42a2b84d5ab095a3c1fc8f4c7d0709b7b9d7",
"0xc6b37aa460436c5f9063858cf242823b3d98a25e436c64491bf7f3cded0c92ea",
"0x2ce341a2148a1be5504dce4f7cb0b8e051b3acb6aede697f1c782ddaff6e11f8",
"0x79cf99004f14372e973c32c0ffbcd939f5a7d7af932eaf8e6d57b4753898cd46",
"0x7afcb02711cbff55b5482025644f2e34f5ea0386c2994fe0b5df0fa83d942421",
"0xbc6e12e5d03f4cf362f3969a071c6d48d4caedf84875860d5d3e03a56d6f740a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


