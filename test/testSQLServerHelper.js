let SQLServerHelperClass = require('../lib/SQLServerHelper');

let sqlServerHelper = new SQLServerHelperClass();

async function SQLServerHelperTest() {
    await sqlServerHelper.connectionPool('','','','');
    await sqlServerHelper.query('select * from xxxx')
}

SQLServerHelperTest();