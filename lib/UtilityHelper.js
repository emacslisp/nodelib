'use strict'

/**
 * 
 */
class UtilityHelper {
    constructor() {
        return this;
    }

    async sleep(seconds) {
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }


    jsonFormat(jsonObject) {
        return JSON.stringify(jsonObject, null, 4);
    }

    stringToBase64(input) {
        return (new Buffer(input)).toString('base64');
    }

}

module.exports = UtilityHelper;