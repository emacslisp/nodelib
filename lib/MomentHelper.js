'use strict';
let moment = require('moment-timezone');

class MomentHelper {
    constructor() {
        return this;
    }

    /**
     * return whole list of timezone that moment support.
     */
    listTimeZone() {
        let timezoneNameArray = moment.tz.names();
        return timezoneNameArray;
    }

    unixTimeToDate(unixtime, timezone) {
        let result = moment.tz(unixtime, timezone);
        return result.format('YYYY-MM-DD HH:mm:ss a');
    }

    momentTimeZoneConverted(unixtime, timezone1, timezone2) {
        let result = moment.tz(unixtime, timezone1);
        let convertedTime = moment.tz(result, timezone2);

        return convertedTime.format('YYYY-DD-MM HH:mm:ss a');
    }
}

module.exports = MomentHelper;