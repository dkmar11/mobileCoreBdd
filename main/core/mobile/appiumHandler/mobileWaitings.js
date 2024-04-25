const driverManager = require('../../../core/mobile/mobileManager');

class MobileWaitings {

  static get driver() {
    return driverManager.driver;
  }

  static async waitingTo(selector) {
    const element = await this.driver.$(selector);
    return element
  }
}

module.exports = MobileWaitings;