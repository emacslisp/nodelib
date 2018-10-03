let CryptoHelperClass = require('../lib/CryptoHelper');

let cryptoHelper = new CryptoHelperClass();

console.log(cryptoHelper.md5str('test'));
console.log(cryptoHelper.generateHash('test','123'));