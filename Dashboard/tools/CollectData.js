/* 
External script to collect and manipulate data
*/

//* installed libarys
const moment = require('moment');

/**
 * function to convert date from integer version into german date version
 * 
 * @param {int} dateAsInt - date as integer
 * @returns date in DD.MM.YYYY 
 *  
 */
function convertDate(dateAsInt) {
    return moment(dateAsInt).format("DD.MM.YYYY");   
}

function collectData() {
    // create arrays to collect data in specific place
    let date = [];
    let time = [];
    let place = [];
    let temperature = [];
    let pressure = [];
    let brightness  = [];
    let wasserPegel = [];
}


//* tools to convert from row data into (real-world) informations





module.exports = {
    convertDate: convertDate
  };
  