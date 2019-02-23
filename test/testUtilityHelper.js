let utilityClass = require('../lib/UtilityHelper');
let utility = new utilityClass();
async function test() {
    console.log('Counting.....');
    for (var i = 0; i < 10; i++) {
        console.log(i);
        await utility.sleep(1);
    }
    console.log('Done.....');

    //process.exit(0);
}

async function removeHtmlCommentsTest() {
    let htmlString = '<!DOCTYPE html><!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]--><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><!-- this is a test body--></body></html>';
    let result = utility.removeHtmlComments(htmlString);
    console.log(result);

    //process.exit(0);
}

async function isNumberTest() {
    console.log('### isNumberTest start here');

    let target = 123.456;
    console.log(target, utility.isNumber(target));

    target = "123.456";
    console.log(target, utility.isNumber(target));

    target = "123456789";
    console.log(target, utility.isDigitalString(target));
}

async function isEmptyTest() {
    let obj = {};
    console.log('utility.isEmpty: ', utility.isEmpty(obj));
    obj.key = 1;
    obj.value = 2;
    console.log('utility.isEmpty: ', utility.isEmpty(obj));
}

async function base64Test() {
    let result = utility.stringToBase64('123')
    console.log('123 base64 is', result);
    console.log('123 decode value is', utility.base64ToString(result));
}

test();
removeHtmlCommentsTest();
isNumberTest();
isEmptyTest();
base64Test();