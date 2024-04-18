const MobileActions = require("../utils/mobileActions");

class onboardingPage{
  constructor(){
    this.openAccountBtn = '//android.widget.TextView[@resource-id="com.bg.ganamovil:id/LabelOptions" and @text="Apertura de 1ra Cuenta"]'; 
  }
  async openAccount(){
    MobileActions.clickOn(this.openAccountBtn)
  }
}

module.exports = new onboardingPage();