const { Before } = require('@cucumber/cucumber');
const logger = require('../../../main/core/utils/logger');
Before(async function(scenario) {
  logger.info("********************NEW SCENARIO********************")
  logger.info(scenario.pickle.name);
});