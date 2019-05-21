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

MomentServiceTest();
