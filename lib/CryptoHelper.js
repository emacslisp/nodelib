let crypto = require('crypto');

/**
 * put md5/sha1/sha256 and so on here
 */
class CryptoHelper {
    constructor() {

    }

    md5str(data) {
        return crypto.createHash('md5').update(data).digest("hex");
    }

    generateHash(password, salt) {
        return crypto.createHmac('sha256', salt).update(password).digest('hex');
    }

    generateSalt(saltLength) {
        let numbers = '0123456789';
        let lower = 'abcdefghijklmnopqrstuvwxyz';
        let upper = lower.toUpperCase();
        let possible = upper + lower + numbers;
        let salt = '';

        if(!saltLength) saltLength = 10;

        for (let i = 0; i < saltLength; i++) {
            salt = salt + possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return salt;
    }
}

module.exports = CryptoHelper;