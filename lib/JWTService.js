'use strict';

let jwt = require('jsonwebtoken');

const userKey = "8fc1ba4d-17ad-4245-a05f-c6445bb9174c";

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