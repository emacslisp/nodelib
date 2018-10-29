'use strict'

var removeHtmlCommentsFunc = require('remove-html-comments');

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

    removeHtmlComments(htmlString) {
        return removeHtmlCommentsFunc(htmlString);
    }

    isNumber(number) {
        if (typeof number == 'number')
            return true;

        return false;

        //return !isNaN(number);
    }

    isDigitalString(numberString) {
        let reg = new RegExp('^[0-9]+$');
        return reg.test(numberString);
    }
}

module.exports = UtilityHelper;