let regexHelperClass = require('../lib/RegexHelper');

//let nodelibTest = new nodelibClass();
let regexHelper = new regexHelperClass();

async function testRegex() {
    const result  = await regexHelper.isMatch('/abc def/gi','Abc Def');
    console.log(result);
}

testRegex();