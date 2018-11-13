const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(89248, 'A90DSFG93NDW', '09ED3DSACX47D');

bitcoin.createNewTransaction(100, 'ALEX98SSADSFGSSDF8SDF0X', 'JENN03DSF03DF342WX99');

bitcoin.createNewBlock(123412, '09IOANS033432DS', 'JDS30ADS90SAX3');

bitcoin.createNewTransaction(10, 'ALEX98SSADSFGSSDF8SDF0X', 'JENN03DSF03DF342WX99');
bitcoin.createNewTransaction(300, 'ALEX98SSADSFGSSDF8SDF0X', 'JENN03DSF03DF342WX99');
bitcoin.createNewTransaction(2000, 'ALEX98SSADSFGSSDF8SDF0X', 'JENN03DSF03DF342WX99');

bitcoin.createNewBlock(123413, '24WEANS0334353S', 'FD345S30ADD34SAX3');

//bitcoin.createNewBlock(2389, '0INA49DF9FS0', '903AD943DXDF');
//bitcoin.createNewBlock(111, '0UY498FD4390', '5DIYH76D80D0');
//bitcoin.createNewBlock(2343, 'AD098ED3GXC0', '8D3A34943DDFF');

console.log(bitcoin);
console.log(bitcoin.chain[2]);