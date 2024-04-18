const { Before } = require('@cucumber/cucumber');
const logger = require('../../../main/core/utils/logger');
const MobileManager = require('../../../main/core/mobile/mobileManager');
const MobileActions = require('../../../main/ganamobil/utils/mobileActions');
Before(async function(scenario) {
  logger.info("********************NEW SCENARIO********************")
  logger.info(scenario.pickle.name);
});
Before({ tags: "@mobile"}, async function() {
  logger.info("********************STARTING MOBILE********************")
  this.driver = await MobileManager.init()
  const cancelDebugBtn = '//android.widget.Button[@resource-id="android:id/button2"]';
  await MobileActions.clickOn(cancelDebugBtn);
});
