let request = require('request');

class nodelib {

    constructor() {
        
    }

    jsonFormat(jsonObject) {
        return JSON.stringify(jsonObject, null, 4);
    }

    stringToBase64(input) {
        return (new Buffer(input)).toString('base64');
    }

    async requestWithBasicAuth(url, method, data, headers, username, password) {
        let token = this.stringToBase64(username+':'+password);
        if (headers)
            headers = {};

        headers.Authorization = 'Basic ' + token;
        return this.jsonFormat(await this.request(url, method, data, headers));
    }

    async request(url, method, data, headers) {
      return new Promise((resolve, reject) => {
        request({
          url,
          method,
          json: data,
          headers
        }, (err, resp, body) => {
          if (err) return reject(err);

          const statusCode = resp.statusCode;

          if (statusCode !== 200 && statusCode !== 201) {
            let msg = body.message || 'Unknown error from nodelib request';

            return reject(new Error(msg));
          }
          return resolve(body);
        });
      });
        
    }
    
}

module.exports = new nodelib();
