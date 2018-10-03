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
}

module.exports = CryptoHelper;