let MomentHelperClass = require('../lib/MomentHelper');

let MomentHelper = new MomentHelperClass();

async function MomentHelperTest() {
    let result = MomentHelper.unixTimeToDate(1548269288762, 'Australia/Perth');
    console.log(result);
}

MomentHelperTest();