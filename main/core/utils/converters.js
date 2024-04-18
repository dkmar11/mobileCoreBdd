/**
 * Converts a date like 01/02/2024 to 20240201
 * @param {string} date to convert
 */
const convertDate = function (date) {
    let dateArray = date.split('/');
    let newDate = dateArray[2] + dateArray[1] + dateArray[0];
    return newDate;
  };
  
module.exports = convertDate;
