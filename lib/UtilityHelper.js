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
        return Buffer.from(input).toString('base64');
    }

    base64ToString(input) {
        return Buffer.from(input, 'base64').toString();
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

    /**
     * check whether object is empty or not.
     * @param {object} obj - input object
     */
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    /**
     * get email domain
     * @param {String} email 
     */
    getEmailDomain(userEmail) {
        return userEmail.substring(userEmail.indexOf('@') + 1);
    }

    validateEmail(email) {
        let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,10}(?:\.[a-z]{2})?)$/i;
    
        return re.test(email);
    }
}

module.exports = UtilityHelper;