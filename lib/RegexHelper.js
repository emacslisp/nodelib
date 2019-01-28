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
    
}

module.exports = RegexHelper;