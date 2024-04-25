const { Before, After, AfterStep } = require('@cucumber/cucumber');
const logger = require('../../../main/core/utils/logger');
const conversationWhastapp = require('../../../main/whatsapp/conversationWhastapp');
const mobileManager = require('../../../main/core/mobile/mobileManager');
const configurationManager = require('../../../main/core/utils/configurationManager');
const { BeforeAll } = require('cucumber');

Before(async function(scenario) {
  logger.info("********************NEW SCENARIO********************")
  logger.info(scenario.pickle.name);
});

Before({ tags: "@whatsapp" }, async function() {
  await mobileManager.init(configurationManager.environment.whatsappCapabilities)
});

Before({ tags: "@record" }, async function() {
  await mobileManager.driver.startRecordingScreen()
});


After({ tags: "@clearChat" }, async function () {
  await conversationWhastapp.clearChat()
});

After({ tags: "@record" }, async function(scenario) {
  await mobileManager.driver.saveRecordingScreen(`./../video_${scenario.pickle.id}.mp4`)
});
