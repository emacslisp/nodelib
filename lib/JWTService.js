'use strict';

let jwt = require('jsonwebtoken');

const userKey = "0181731d-939b-4434-816a-b0b5ca9616ae";

class JWTService {
    constructor() {
        return this;
    }

    generateToken(payload) {
        return jwt.sign(payload, userKey, { expiresIn: 60 * 60 * 24 });
    }

    async verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, userKey, {}, (err, target) => {
                if (err) {
                    return reject(err);
                }
                return resolve(target);
            });
        });
    }
}

module.exports = JWTService;
