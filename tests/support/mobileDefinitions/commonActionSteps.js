const { Given, When } = require("@cucumber/cucumber");
const mobileManager = require("../../../main/core/mobile/mobileManager");
const configurationManager = require("../../../main/core/utils/configurationManager");
const dashboard = require("../../../main/whatsapp/dashboardWhatsapp");
const conversationWhastapp = require("../../../main/whatsapp/conversationWhastapp");
const MobileGettings = require("../../../main/core/mobile/appiumHandler/mobileGettings");

When("selecciono mi contacto {string}", async function(contactName) {
  const inputField = await MobileGettings.getElement(conversationWhastapp.inputField);
  if(!inputField){
    await dashboard.selectContact(contactName);
  }
});
When('envio {string} en el chat', async function(message) {
  await conversationWhastapp.sendMessage(message);
})
