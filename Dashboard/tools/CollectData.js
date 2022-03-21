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
    let timeStamp = timeString.split();

}


function collectAllData(rowData) {
    // create arrays to collect data in specific place
    let date = [];
    let time = [];
    let place = [];
    let temperature = [];
    let airPressure = [];
    let brightness  = [];
    let waterLevel = [];
}

/**
 * Takes each set of the same time and add it to one Dataset
 * 
 * @param {String} seriesOfData 
 */
function summarizeDataset(seriesOfData) {
    summarizedDataset = {
        //"date": 
    }
}

function sortDataBy(data_pack, topic) {

    var sortedDataSet = [];
    var topic_key = String(topic).toLocaleUpperCase();

    data_pack.forEach(element => {
        sortedDataSet.push({
            "DATUM": element.DATUM,
            "ZEIT": element.ZEIT,
            "ORT": element.ORT,
            [topic_key]: element[topic_key]
        });
        return sortedDataSet;
    });

    //
}

