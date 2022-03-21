/* 
External script to collect and manipulate data
*/

//* installed libarys
const moment = require('moment');

/**
 * function to convert date from integer version into german date version
 * 
 * @param {int} dateAsInt - date as integer
 * @returns momentjs object
 */
function convertDate(dateAsInt) {
    return moment(dateAsInt).format("DD.MM.YYYY");   
}

/**
 * function to convert time from integer version into german time version
 * 
 * @param timeAsInt - time as integer
 * @returns 
 */
function convertTime(timeAsInt) {
    // convert time as integer version into string to split it
    let timeString = String(timeAsInt);




}


function collectData() {
    // create arrays to collect data in specific place
    let date = [];
    let time = [];
    let place = [];
    let temperature = [];
    let airPressure = [];
    let brightness  = [];
    let waterLevel = [];
}


//* tools to convert from row data into (real-world) informations





module.exports = {
    convertDate: convertDate,
    convertTime: convertTime
  };
  