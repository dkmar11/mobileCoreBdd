const MobileActions = require("../core/mobile/appiumHandler/mobileActions");

class DashboardWhatsapp{
  constructor(){
    this.searchBtn = '//android.widget.ImageButton[@content-desc="Buscar"]';
    this.searchInput = '//android.widget.EditText[@resource-id="com.whatsapp:id/search_input"]';
    this.contactSelectorBtn = '(//android.widget.RelativeLayout[@resource-id="com.whatsapp:id/contact_row_container"])[last()]'

  }

  async selectContact(contactName){
    await MobileActions.clickOn(this.searchBtn);
    await MobileActions.sendKeys(this.searchInput, contactName);
    await MobileActions.clickOn(this.contactSelectorBtn);
  }
}

module.exports = new DashboardWhatsapp();