const configurationManager = require("../utils/configurationManager");
const OracleConnection = require("./oracleConnection");

class DatabaseFactory {
  constructor(){
    this.environment = configurationManager.environment
  }
  getInstance(type){
    const map = this.loadDatabase();
    return map.get(type);
  }

  loadDatabase() {
    const map = new Map();
    map.set("oracle", new OracleConnection(this.environment["oracleConfig"]));
    return map;
  }
}

module.exports = new DatabaseFactory()
