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
            this.parseString(xml, { trim: true }, function (err, result) {
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