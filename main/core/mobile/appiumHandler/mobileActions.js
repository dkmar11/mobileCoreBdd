const driverManager = require('../../../core/mobile/mobileManager');
const logger = require('../../../core/utils/logger');
const MobileWaitings = require('./mobileWaitings');

/**
 * Class to do actions on selenium web driver
 */
class MobileActions {
  static get driver() {
    return driverManager.driver;
  }
  static async clickOn(selector) {
    logger.info(`clicking on ${selector}`);
    const element = await MobileWaitings.waitingTo(selector)
    await element.click();
  }

  static async sendKeys(selector, keys) {
    logger.info(`sending keys ${keys} to ${selector}`);
    const element = await MobileWaitings.waitingTo(selector)
    await element.setValue(keys);
  }
}

module.exports = MobileActions;