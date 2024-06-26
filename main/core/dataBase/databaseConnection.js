class DatabaseConnection {
  constructor(config){
    this.config = config;
    this.connection;
  }
  async connect() {
      throw new Error('connect() method must be implemented');
  }

  async close() {
      throw new Error('close() method must be implemented');
  }
}

module.exports = DatabaseConnection