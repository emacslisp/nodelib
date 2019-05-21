'use strict';
let moment = require('moment-timezone');

class MomentService {
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

    unixTime() {
        return moment().unix();
    }

    unixTimewithPeriod() {
        let time = [];
        
        time.push(moment().subtract(30,'day').unix());
        time.push(moment().subtract(7,'day').unix());
        
        time.push(moment().subtract(2,'day').unix());
        time.push(moment().subtract(1,'day').unix());
        time.push(moment().unix());
        return time;
    }

    unixTimeMonth() {
        let time = [];
        for(let i=30;i>=0;i--) {
            time.push(moment().subtract(i,'day').unix());
        }
        return time;
    }

    momentTimeZoneConverted(unixtime, timezone1, timezone2) {
        let result = moment.tz(unixtime, timezone1);
        let convertedTime = moment.tz(result, timezone2);

        return convertedTime.format('YYYY-DD-MM HH:mm:ss a');
    }
}

module.exports = MomentService;