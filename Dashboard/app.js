"use strict"; //* to avoid problems

const express = require('express');
const moment = require('moment');
const res = require('express/lib/response');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 4001;
const IP = "localhost"; // my network address: 192.168.1.102


// Serves Express Yourself website
app.use(express.static('public'));


// Use functions from other files
const { pool } = require('./tools/db');
const { testOutput, getAllDates, getDataByIntervall,  getFirstItem } = require('./tools/CollectData');


// --- GET methods section ---

//! this is the landingpage 
app.get('/', (req, res, next) => {
  res.send('Hallo');
});


// TODO: Extend the application with a GET method to collect data from the server in a intervall
//app.get('/collectDataFromDB/:howManyDatasets', (req, res, next) => {

// End-point to collect all data from DB
app.get('/collectAllDataFromDB', (req, res, next) => {
  // to collect all data from DB there have to happen many steps

  // variables to safe side information
  var allAvailableData;
  var dateLimits = {
    'firstEntry': '',
    'lastEntry': ''
  };

  // 1. connect route with DB 
  pool.getConnection()
  // 2. send query command to DB
  .then((connection) => {
    connection.query('SELECT * FROM Daten')
    // 3. get all data from DB
    .then((rows) => {
      // 4. use db rows to filter for unique date elements
      allAvailableData = rows
    })

    //+ get first entry
    connection.query('SELECT * FROM Daten ORDER BY Datum LIMIT 1')
    .then((rows) => {
      dateLimits["firstEntry"] = rows[0].DATUM;
    })

    //+ get last entry
    connection.query('SELECT * FROM Daten ORDER BY Datum desc LIMIT 1')
    .then((rows) => {
      dateLimits["lastEntry"] = rows[0].DATUM;
    })

    .then((rows) => {
      console.log(dateLimits);
    })
  })

  .finally(() => {
    pool.end();
  });


})



// End-point to collect data of specific key
app.get('/collectDataBy/:key', (req, res, next) => {

  //TODO: Add dotenv package with Dotenv environment variables from .env files
  pool.getConnection()
  .then(connection => { // in case of success
    // Take page informations and use them as "key" to get specific data
    connection.query(`SELECT * FROM Daten WHERE ` + String(key) + ` IN `)
    .then(rows => {
      connection.end();
      res.send(rows);
    }) 
    .catch(err => {
      console.log("# Daten wurden nicht uebergeben #");
    });
  })
  .catch(err => { // in case of failure
    console.log("## Verbindung konnte nicht aufgebaut werden ##");
  })
})


//TODO: https://bm.enthuses.me/buffered.php?bref=729

app.get('/callTestData', (req, res, next) => { //! IS WORKING
  let queryString = "SELECT * FROM Daten LIMIT 12";
  pool.getConnection()
  .then(connection => {
    connection.query(queryString)
    .then((rows) => {
      let collectedData = JSON.stringify(rows);
      let dataCollection = JSON.parse(collectedData);
      console.log(dataCollection);
      res.send(data = dataCollection);
    })
  })
});

app.get('/test', (req, res, next) => {
  testOutput();
})




// --- manipulate data for chartJS---

function createChartjsObject(data) {

  // a list to organize the data
  var jsonForChartJS;

  // organization labels for datasets
  let dataLabels = [
    "Temperatur", 
    "Feuchtigkeit",
    "Druck", "Licht",
    "Wasserstand"
  ]

  let dataSet = { 
    label: "Temperatur", //? how to get json key name?
    data: []

  }



}


// --- helper functions to format information ---

function formatDateTime(intDate, intTime) {
  let formatedDate = moment(intrDate).format("DD.MM.YYYY");
  let formatedTime = moment(intTime, "HH:mm:ss").format("hh:mm A");
  return newDate;
}




// +++ start application +++

app.listen(PORT, IP, () => {
    console.log(`Listening on port ${PORT}`);
  });