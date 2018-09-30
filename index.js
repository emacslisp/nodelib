let request = require('request');

class nodelib {

    constructor() {
        
    }

    async test() {
        return "test information!!!";
    }

    async require(url, method, data) {
      return new Promise((resolve, reject) => {
        request({
          url,
          method,
          json: data
        }, (err, resp, body) => {
          if (err) return reject(err);

          const statusCode = resp.statusCode;

          if (statusCode !== 200) {
            let msg = body.message || 'Unknown error from VPE';

            return reject(new Error(msg));
          }
          return resolve(body);
        });
      });
        
    }
    
}

module.exports = new nodelib();
