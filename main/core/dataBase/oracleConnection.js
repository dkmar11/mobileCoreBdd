const oracledb = require("oracledb");
const DatabaseConnection = require("./databaseConnection")

class OracleConnection extends DatabaseConnection {
    constructor(config) {
        super(config);
        DatabaseConnection
    }

    async connect() {
        this.connection = await oracledb.getConnection(this.config);
        return this.connection;
    }

    async close() {
        await this.connection.close();
    }
}

module.exports = OracleConnection;