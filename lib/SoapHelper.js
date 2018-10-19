'use strict'

let soap = require('soap');

/**
 * 
 */
class SoapHelper {
    constructor() {
        return this;
    }

    async createSoapClient(url, baseUrl, username, password) {
        return new Promise((resolve, reject) => {
            soap.createClient(url, { endpoint: baseUrl }, async function(err,client) {
                client.setSecurity(new soap.WSSecurity(username, password));
                if(err) {
                    reject(err);
                }
                resolve(client);
            });
        });
    }
}

module.exports = SoapHelper;