/* 
External script to collect and manipulate data
*/

//* installed libarys
const moment = require('moment');


function convertDate(dateAsInt) {
    return moment(String(dateAsInt), "YYYY-MM-DD");   
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
  