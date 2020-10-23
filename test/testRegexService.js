let regexServiceClass = require('../lib/RegexService');

//let nodelibTest = new nodelibClass();
let regexService = new regexServiceClass();

async function testRegex() {
    let result  = await regexService.isMatch('/abc def/gi','Abc Def');
    console.log(result);

    result = regexService.validatePhone2('+60 0452074620');
    console.log(result);

    result = regexService.validatePhone2('+(60) 0452074620');
    console.log(result);

    result = regexService.validatePhone2('+60452074620');
    console.log(result);

    result = regexService.validatePhone2('+040 0536627');
    console.log(result);
}

testRegex();
