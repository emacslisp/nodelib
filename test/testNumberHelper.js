let NumberHelperClass = require('../lib/NumberHelper');

let NumberHelper = new NumberHelperClass();

async function NumberHelperTest() {
    let result = NumberHelper.formatNumber(123456.789);
    console.log(result);
}

NumberHelperTest();