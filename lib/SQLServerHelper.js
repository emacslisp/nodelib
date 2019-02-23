let mssql = require("mssql");

class SQLServerHelper {
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

    async query(sqlStatement) {
       let result = await this.pool.request().query(sqlStatement);
       mssql.close();
       return result;
    }
}

module.exports = SQLServerHelper;