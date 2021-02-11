let NumberHelperClass = require('../lib/NumberHelper');

let NumberHelper = new NumberHelperClass();

async function NumberHelperTest() {
    let result = NumberHelper.formatNumber(123456.789);
    console.log(result);

    result = NumberHelper.divideToFloat(260054159.28, 1024*1024);
    console.log(result);
}

NumberHelperTest();