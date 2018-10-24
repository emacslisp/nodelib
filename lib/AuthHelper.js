'use strict';

let cryptoClass = require('../lib/CryptoHelper');

class AuthHelper {
    constructor() {
        this.cryptoHelper = new cryptoClass();
        return this;
    }

    /**
     * verify using sha 256 hash algorithm, return true if hash = f(password, salt)
     * @param {*} password 
     * @param {*} salt 
     * @param {*} hash 
     */
    verify(password, salt, hash) {
        let passwordMatch = this.cryptoHelper.generateHash(password, salt) === hash;
        return passwordMatch;
    }
}

module.exports = AuthHelper;