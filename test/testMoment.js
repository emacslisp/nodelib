let moment = require('moment');

let MomentServiceClass = require('../lib/MomentService');

let MomentService = new MomentServiceClass();

async function MomentServiceTest() {
    let result = MomentService.unixTimeToDate(1548269288762, 'Australia/Perth');
    console.log('1: ', JSON.stringify(result, null, 4));

    result = MomentService.unixTime();
    console.log('2: ', JSON.stringify(result, null, 4));

    result = MomentService.unixTimewithPeriod();
    console.log('3:', JSON.stringify(result, null, 4));
}

async function momentTest() {
    let now = moment();
    let now2 = moment().subtract('1','days');
    console.log(now2.diff(now));

    console.log(moment().tz(moment.tz.guess()).format('z'));
    
    let date1 = moment.utc('2020-05-31T16:23:57.000Z').format('MMM/YYYY');
    console.log(date1);

    let startDate = moment();
    console.log(startDate.month());
    console.log(moment.months());

    let days = MomentService.diffDays('2021-04-01');
    console.log("diff days: " + days);
}

momentTest();
//MomentServiceTest();
