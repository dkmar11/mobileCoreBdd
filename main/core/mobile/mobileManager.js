const andriod = require("./andriod")
/**
 * 
 */
class MobileManager {
  /**
   * singleton pattern to ensure only one instance of the driver is created
   */
  constructor() {
    this.sessionExists = false;
  }
  /**
   * method to initialize the driver
   */
  async init(capabilities) {
    if (!this.sessionExists) {
      this.driver = await andriod(capabilities);
      this.sessionExists = true;
    }
  }

  async close() {
    if (this.sessionExists) {
      await this.driver.deleteSession();
    }
  }
}

module.exports = new MobileManager();