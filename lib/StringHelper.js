'use strict'

/**
 * String Helper
 */
class StringHelper {
    constructor() {
        return this;
    }

    startsWith(input, target) {
        return input.startsWith(target);
    }

    /**
     * replace all for javascript
     * by default, javascript default function replace first occur only
     * @param {*} input 
     * @param {*} search 
     * @param {*} target 
     * @return {string} final result
     */
    replaceAll(input, find, replace) {
        return input.replace(new RegExp(find, 'g'), replace);
    }

    /**
     * escape special token for regex
     * @param {string} string 
     * @returns {string} replace special token for regex
     */
    escapeRegExp(string) {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    /**
     * remove last char of string using substring
     * @param {*} string 
     */
    removeLastChar(string) {
        return string.substring(0, string.length - 1);
    }
}

module.exports = StringHelper;