const driverManager = require('../mobileManager');
const logger = require('../../utils/logger');

/**
 * Class to do actions on selenium web driver
 */
class MobileGettings {
  static get driver() {
    return driverManager.driver;
  }
  static async getElement(selector) {
    logger.info(`Getting elements with selector: ${selector}`);
    const element = await this.driver.$(selector);
    return element;
  }

  static async getText(selector){
    logger.info(`Getting text with selector: ${selector}`);
    const element = await this.getElement(selector);
    const text = await element.getText();
    return text
  }
}

module.exports = MobileGettings;