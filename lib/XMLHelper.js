'use strict'
let xml2js = require('xml2js');

/**
 * 
 */
class XMLHelper {
    constructor() {
        this.parseString = xml2js.parseString;
        return this;
    }

    buildXML(obj) {
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(obj);
        return xml;
    }

    async parseXML(xml) {
        return new Promise((resolve, reject) => {
            let parameters = { trim: true };
            // we could add more parameters here.
            /**
             * let stripNs = (name) => {
                return name.replace(self._stripNsProcessor, '');
                };

                let parameters = {
                tagNameProcessors: [ stripNs ]
                };

                if (explicitArray) {
                Object.assign(parameters, {
                    ignoreAttrs: true,
                    explicitArray: false
                });
                }
             */
            this.parseString(xml, parameters, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = XMLHelper;