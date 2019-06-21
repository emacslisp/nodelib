let xmlClass = require('../lib/XMLHelper');

let xmlHelper = new xmlClass();

async function test() {

    let xml = "<root name ='xxxxx'>Hello xml2js!</root>";
    let result = await xmlHelper.parseXML(xml);
    console.log(result);
    process.exit(0);
}

async function buildXMLTest() {
    var obj = {name: "Super", Surname: "Man", age: 23};
    let result = xmlHelper.buildXML(obj);
    console.log(result);
    process.exit(0);
}

test();
//buildXMLTest();