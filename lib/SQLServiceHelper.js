let mssql = require("mssql");

class SQLServiceHelper {
    constructor() {
        return this;
    }

    async connectionPool(user, password, server, database) {
        let config = {
            user,
            password,
            server, 
            database 
        };
    
        this.pool = await (new mssql.ConnectionPool(config)).connect();
    }

    query(sqlStatement) {
       let result = await pool.request().query(getInterfaceStatement);
       mssql.close();
       return result;
    }
}

module.exports = SQLServiceHelper;