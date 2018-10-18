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

}

module.exports = UtilityHelper;