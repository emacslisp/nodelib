let MySQLHelperClass = require('../lib/MySQLHelper');

let mySQLHelper = new MySQLHelperClass();

async function MySQLHelperTest() {
    await mySQLHelper.connectionPool('','','','');
    await mySQLHelper.query('select * from xxxx')
}

MySQLHelperTest();