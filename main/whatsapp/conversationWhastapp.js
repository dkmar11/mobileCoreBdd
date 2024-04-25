const MobileActions = require("../core/mobile/appiumHandler/mobileActions");
const MobileGettings = require("../core/mobile/appiumHandler/mobileGettings");
const whatsappConstanst = require("./constanst")
class conversationWhastapp{
  constructor(){
    this.inputField = `//android.widget.EditText[${whatsappConstanst.resorceId}/entry']`
    this.sendBtn = "//android.widget.ImageButton[@content-desc='Enviar']"
    this.optionsBtn = "//android.widget.ImageView[@content-desc='Más opciones']"
    this.moreOptionsBtn = `//android.widget.TextView[${whatsappConstanst.resorceId}/title' and @text='Más']`
    this.clearOptionBtn = `//android.widget.TextView[${whatsappConstanst.resorceId}/title' and @text='Vaciar chat']`
    this.clearChatBtn = "//android.widget.Button[@resource-id='android:id/button1']"
  }

  messageTextView(message){
    return `//android.widget.TextView[${whatsappConstanst.resorceId}/message_text' and @text='${message}']`
  }
  async sendMessage(message){
    await MobileActions.sendKeys(this.inputField, message);
    await MobileActions.clickOn(this.sendBtn);
  }

  async getMessage(message){
    const text = await MobileGettings.getText(this.messageTextView(message))
    return text
  }

  async clearChat(){
    await MobileActions.clickOn(this.optionsBtn);
    await MobileActions.clickOn(this.moreOptionsBtn);
    await MobileActions.clickOn(this.clearOptionBtn);
    await MobileActions.clickOn(this.clearChatBtn);
  }
}

module.exports = new conversationWhastapp();