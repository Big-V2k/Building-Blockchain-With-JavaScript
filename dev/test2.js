const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();


const previousBlockHash = '0IDNESDF3934DJSDFS4045SDF';
const currentBlockData = [
    {
        amount: 10,
        sender: 'N90ANS03434FGJIGS',
        recipient: '90NA949NDSFJH09SDF0'
    },
    {
        amount: 30,
        sender: 'R340ANS03434FGJIGS',
        recipient: 'DFSNA944DSF45SDF0'
    },
    {
        amount: 200,
        sender: 'TYF0ANS3434F45RD',
        recipient: '5ADF949NDSFJH564F0'
    }
];


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 26366));