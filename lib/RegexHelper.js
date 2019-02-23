'use strict'

/**
 * Regex expression helper
 * put all regex expression here
 */
class RegexHelper {
    constructor() {
        return this;
    }

    async isMatch(regexString, targetString) {
        const regex = new RegExp(regexString);
        return regex.test(targetString);
    }

    validatePhone(phone) {
        let re = /^[+]{0,1}(?:\d\s*){7,}$/i;

        return re.test(phone);
    }
}

module.exports = RegexHelper;