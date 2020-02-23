let ObjectHelperClass = require('../lib/ObjectHelper');

let ObjectHelper = new ObjectHelperClass();

async function ObjectHelperTest() {
    let objA = {
        a: 'objA'
    };

    let objB = {
        b: 'objB'
    };

    let result = ObjectHelper.mergeObject(objA, objB);
    console.log(JSON.stringify(result));

    result = ObjectHelper.mergeObject2(objA, objB);
    console.log(JSON.stringify(objA));
}

ObjectHelperTest();