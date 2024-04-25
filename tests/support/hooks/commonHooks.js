const { Before, After } = require('@cucumber/cucumber');
const logger = require('../../../main/core/utils/logger');
const conversationWhastapp = require('../../../main/whatsapp/conversationWhastapp');
Before(async function(scenario) {
  logger.info("********************NEW SCENARIO********************")
  logger.info(scenario.pickle.name);
});

After({ tags: "@clearChat" }, async function () {
  await conversationWhastapp.clearChat()
});