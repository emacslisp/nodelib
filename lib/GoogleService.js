'use strict';

let requestClass = require('./RequestHelper');

/**
 * Put Google API Here
 */
class GoogleService {
    constructor() {
        this.requestHelper = new requestClass();
        return this;
    }

    async geoIP(ip) {
        let url = 'http://ip-api.com/json/' + ip;
        let result = await this.requestHelper.request(url,'get');
        return result;
    }
}

module.exports = GoogleService;