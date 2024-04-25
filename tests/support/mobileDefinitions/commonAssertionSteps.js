const { Then } = require("@cucumber/cucumber");
const conversationWhastapp = require("../../../main/whatsapp/conversationWhastapp");
const { default: expect } = require("expect");

Then('uno de los mensajes de respuesta es:', async function(textExpected) {
  const text = await conversationWhastapp.getMessage(textExpected)
  expect(text).toBeDefined()
})
