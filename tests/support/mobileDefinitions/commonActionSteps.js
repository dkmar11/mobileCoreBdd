const { Given, When } = require("@cucumber/cucumber");
const logger = require("../../../main/core/utils/logger");
const mobileManager = require("../../../main/core/mobile/mobileManager");
const configurationManager = require("../../../main/core/utils/configurationManager");
const dashboard = require("../../../main/whatsapp/dashboardWhatsapp");
const conversationWhastapp = require("../../../main/whatsapp/conversationWhastapp");
const MobileGettings = require("../../../main/core/mobile/appiumHandler/mobileGettings");

Given("que abro whatsapp", async function() {
  await mobileManager.init(configurationManager.environment.whatsappCapabilities)
});

When("selecciono mi contacto {string}", async function(contactName) {
  if((await MobileGettings.getElements(conversationWhastapp.inputField)).length === 0){
    await dashboard.selectContact(contactName);
  }
});
When('envio {string} en el chat', async function(message) {
  await conversationWhastapp.sendMessage(message);
})
