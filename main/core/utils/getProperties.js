/**
 * Converts a feature data for Jest assertion
 * @param {string} data to convert
 */
const getProperties = function (data) {
  if (data === "true") {
    return true;
  } else if (data === "false") {
    return false;
  } else if (data === "[]") {
    return [];
  } else if (data == "null") {
    return null;
  }
  return data;
};
module.exports = getProperties;
