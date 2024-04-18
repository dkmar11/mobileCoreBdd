const { Given } = require("@cucumber/cucumber");
const logger = require("../../../main/core/utils/logger");

Given("que ingreso a la aplicacion en testing", async function() {
 logger.info("Ingreso a la aplicacion");
});