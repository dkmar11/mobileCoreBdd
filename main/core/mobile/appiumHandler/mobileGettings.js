const driverManager = require('../mobileManager');
const logger = require('../../utils/logger');
const MobileWaitings = require('./mobileWaitings');

/**
 * Class to do actions on selenium web driver
 */
class MobileGettings {
  static get driver() {
    return driverManager.driver;
  }
  static async getElements(selector) {
    logger.info(`Getting elements with selector: ${selector}`);
    const elements = await this.driver.$$(selector);
    return elements;
  }
}

module.exports = MobileGettings;