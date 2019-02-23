let StringHelperClass = require('../lib/StringHelper');
let stringHelper = new StringHelperClass();


async function startsWithTest() {
    let result = stringHelper.startsWith('ipw1234','ipw');
    console.log(result);
}

startsWithTest();