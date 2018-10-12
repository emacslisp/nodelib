let RedisClass = require('../lib/RedisHelper');

let RedisServer = new RedisClass();

async function test() {
    let result = await RedisServer.set('test','test is a test string');
    let result2 = await RedisServer.get('test');
    console.log(result2);
}

test();