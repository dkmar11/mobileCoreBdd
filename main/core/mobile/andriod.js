const { remote } = require('webdriverio');
const configurationManager = require("../utils/configurationManager");
const logger = require('../utils/logger');

async function andriod() {
  const wdOpts = configurationManager.setUp.mobile.appium
  wdOpts.capabilities = configurationManager.environment.capabilities
  const driver = await remote(wdOpts);
  await driver.setTimeouts(configurationManager.setUp.mobile.implicitWait);
  return driver;
}

module.exports = andriod;