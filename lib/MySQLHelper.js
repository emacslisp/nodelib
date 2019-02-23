let mysql = require('mysql');

class MySQLHelper {
    constructor() {
        return this;
    }

    async connect(user, password, server, database) {
        try {
            let con = mysql.createConnection({
                host: server,
                user,
                password,
                database
            });

            let result = await con.connect();
            this.con = con;

        } catch (err) {

        }
    }

    query(sqlStatement) {
        try{
            let result = con.query(sqlStatement);
            return result;
        } catch (err) {
            return '';
        }
    }
}

module.exports = MySQLHelper;