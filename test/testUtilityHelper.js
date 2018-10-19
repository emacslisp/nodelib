let utilityClass = require('../lib/UtilityHelper');
let utility = new utilityClass();
async function test() {
    console.log('Counting.....');
    for (var i = 0; i < 10; i++) {
        console.log(i);
        await utility.sleep(1);
    }
    console.log('Done.....');

    process.exit(0);
}

async function removeHtmlCommentsTest() {
    let htmlString = '<!DOCTYPE html><!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]--><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body><!-- this is a test body--></body></html>';
    let result = utility.removeHtmlComments(htmlString);
    console.log(result);

    process.exit(0);
}

//test();
removeHtmlCommentsTest();
