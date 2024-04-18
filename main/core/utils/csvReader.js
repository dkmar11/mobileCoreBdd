const fs = require('fs');
const csv = require('csv-parser');
const { csvRoute } = require("../../openApi/utils/openApiConstans"); 
const logger = require('./logger');
/**
 * Clas to read a CSV file and return an array of objects.
 */
class CsvReader {
  /**
   * 
   * @param {String} fileName - The name of the file to read.
   * @returns 
   */
  async parseCSV(fileName) {
    const filePath = csvRoute.ROUTE;
    return new Promise((resolve, reject) => {
      const data = [];

      fs.createReadStream(`${filePath}${fileName}`, { encoding: 'utf-8' })
        .pipe(csv({ separator: ';' }))
        .on('data', (row) => {
          data.push(row);
        })
        .on('end', () => {
          resolve(data);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}

module.exports = new CsvReader();