const MobileActions = require("../core/mobile/appiumHandler/mobileActions");
const MobileGettings = require("../core/mobile/appiumHandler/mobileGettings");

class conversationWhastapp{
  constructor(){
    this.inputField = "//android.widget.EditText[@resource-id='com.whatsapp:id/entry']"
    this.sendBtn = "//android.widget.ImageButton[@content-desc='Enviar']"
  }

  messages(message){
    return `//android.widget.TextView[@resource-id='com.whatsapp:id/message_text' and @text='${message}']`
  }
  async sendMessage(message){
    await MobileActions.sendKeys(this.inputField, message);
    await MobileActions.clickOn(this.sendBtn);
  }

  async getMessagesAsElements(message){
    const elements = await MobileGettings.getElements(this.messages(message))
    return elements
  }

  async clearChat(){
    //android.widget.ImageView[@content-desc="Más opciones"]
    //android.widget.LinearLayout[@resource-id="com.whatsapp:id/content"]//*[@text="Más"]
    //android.widget.LinearLayout[@resource-id="com.whatsapp:id/content"]//*[@text="Vaciar chat"]
    //android.widget.Button[@resource-id="android:id/button1"]
  }
}

module.exports = new conversationWhastapp();