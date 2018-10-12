'use strict';

let redis = require("redis");

class RedisHelper {
    constructor(host, port, password) {
        let config = {
            port      : port || 6379,               // replace with your port
            host      : host || '127.0.0.1',        // replace with your hostanme or IP address
        };

        if (password) config.password = password;

        let client = redis.createClient(config);
        this.redisClient = client;
    }

    async set(key, value) {
        return new Promise((resolve, reject) => {
            this.redisClient.set(key, value, (err, val) => {
                if (err) {
                    return reject(err.message);
                }
                resolve(val);
            });
        });
    }

    async get(key) {
        return new Promise((resolve, reject) => {
            this.redisClient.get(key, (err, val) => {
                if (err) {
                    return reject(err.message);
                }
                resolve(val);
            });
        });
    }
}

module.exports = RedisHelper;