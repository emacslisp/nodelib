let CryptoHelperClass = require('../lib/CryptoHelper');

let cryptoHelper = new CryptoHelperClass();

console.log(cryptoHelper.md5str('test'));
console.log("generateHash test: " + cryptoHelper.generateHash('test','123'));


console.log("generateSalt salt: " + cryptoHelper.generateSalt());

console.log("randomString test: " + cryptoHelper.randomString(12));