const { Then } = require("@cucumber/cucumber");
const conversationWhastapp = require("../../../main/whatsapp/conversationWhastapp");
const { default: expect } = require("expect");

Then('uno de los mensajes de respuesta es:', async function(textExpected) {
  const elements = await conversationWhastapp.getMessagesAsElements(textExpected)
  const text = await elements[0].getText()
  expect(text).toBe(textExpected)
})
