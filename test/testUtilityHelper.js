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

test();
