/* 
External script to collect and manipulate data
*/

//* installed libaries
const moment = require('moment');
var mariadb = require('mariadb');

//! --- database data to connect with database ---
var pool = mariadb.createPool({
    host: '192.168.1.102', // Replace with your host name
    port: '3306', // Replace with your database port, default 3306
    user: 'root', // Replace with your database username
    password: 'root', // Replace with your database password
    database: 'wetter', // Replace with your database Name
    connectionLimit: 5 
  }); 



//~ --- tools to convert data in specific format ---

/**
 * function to convert date from integer version into german date version
 * 
 * @param {int} dateAsInt - date as integer
 * @returns momentjs object
 */
function convertDate(dateAsInt, momentjsFormat="DD.MM.YYYY") { 
    let dateEntry = moment(dateAsInt);
    return moment(dateEntry).format(momentjsFormat);   
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


/** //? Is this needed?
 * Takes each set of the same time and add it to one Dataset
 * 
 * @param {String} seriesOfData 
 */
function summarizeDataset(seriesOfData) {
    summarizedDataset = {
        //"date": 
    }
}

//? Is this needed?
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
}


//* --- collect specific data ---

/**
 * Collects all available dates as unique elements
 * 
 * @param {Array} db_rows - data from database as array
 * @returns {Set} dateSet - return collected dates
 */
function getAllDates(db_rows) {

    // each element is unique in a list
    var dateSet = new Set();

    db_rows.forEach(element => {
        
        dateSet.add(
          element.DATUM
        );
        
    });

    return dateSet;
}

//^ ---  methods to process data ---

/**
 * Get 
 */
function getDataByDate(startDate, endData, ) {
    
}

// get first item in a Set
function getFirstItem(_set) {
    
}


// get data by date intervall
function getDataByIntervall(startDate, endDate) {
    
    var ret = [1,2,3];
    var sql = `Select * from Daten where Datum >= ${startDate} and Datum <= ${endDate} order by datum`;
    //var sql = 'Select * from Daten';


    console.log(sql);

    pool.getConnection()
    .then(conn => {
        conn.query(sql)
        .then( (rows) => {
            ret = rows;
            console.log(ret);
            return ret;
        })
    })
}

// general function to collect Data from Database
function getAllData(db_rows, ) {
    // create arrays to collect data in specific place
    let date = [];
    let time = [];
    let place = [];
    let temperature = [];
    let airPressure = [];
    let brightness  = [];
    let waterLevel = [];
}


function testOutput() {
    console.log("Hello world");
}


module.exports = { 
    testOutput: testOutput,
    getAllDates: getAllDates,
    getDataByIntervall: getDataByIntervall,
    getFirstItem: getFirstItem
 };