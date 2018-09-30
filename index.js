let request = require('request');

class nodelib {

    constructor() {
        
    }

    async test() {
        return "test information!!!";
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
