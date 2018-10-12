let crypto = require('crypto');

let bcrypt = require('bcrypt');
let SALT_WORK_FACTOR = 11;
/**
 * put md5/sha1/sha256 and so on here
 */
class CryptoHelper {
    constructor() {
        return this;
    }

    md5str(data) {
        return crypto.createHash('md5').update(data).digest("hex");
    }

    generateHash(password, salt) {
        return crypto.createHmac('sha256', salt).update(password).digest('hex');
    }

    async bCryptHash(password) {
        return new Promise((resolve, reject) => {
            try {
                bcrypt.hash(password, SALT_WORK_FACTOR, (err, hash) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(hash);
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    randomString(len, bits) {
        bits = bits || 36;
        len = len | 12;
        var outStr = "", newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }

    generateSalt(saltLength) {
        saltLength = saltLength | 10;
        let numbers = '0123456789';
        let lower = 'abcdefghijklmnopqrstuvwxyz';
        let upper = lower.toUpperCase();
        let possible = upper + lower + numbers;
        let salt = '';

        for (let i = 0; i < saltLength; i++) {
            salt = salt + possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return salt;
    }
}

module.exports = CryptoHelper;