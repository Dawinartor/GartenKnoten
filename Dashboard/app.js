"use strict";

const express = require('express');
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
  res.send('Hello World');
});


// TODO: Extend the application with a GET method to collect data from the server in a intervall
//app.get('/collectDataFromDB/:howManyDatasets', (req, res, next) => {

// End-point to collect all data from DB
app.get('/get/gesamtuebersicht', (req, res, next) => {
  // to collect all data from DB there have to happen many steps

  // 1. connect route with DB 
  pool.getConnection()
  // 2. send query command to DB
  .then((connection) => {
    connection.query('SELECT * FROM Daten')
    // 3. get all data from DB
    .then((rows) => {
      // 4. resolve data to the path
      res.json(rows);
    })

    .finally(() => {
      //?pool.end(); TODO: Do I need this?
    });
  })
})

// End-Point to collect all available dates (from - to)
app.get('/get/availableDates', (req, res, next) => {

  // json as return value
  ret = {
    first: '',
    last: ''
  }

  pool.getConnection()
  .then(connection => {

    // besorge erstes Datum
    connection.query('Select Datum from DATEN order by datum LIMIT 1')
    // speichere Datum in json
    .then((rows) => {
      ret.first = rows[0];
    })

    // besorge letztes Datum
    connection.query('Select Datum from DATEN order by datum desc LIMIT 1')
    // speichere Datum in json
    .then((rows) => {
      ret.last = rows[0];
      res.json(ret);
    })

    .finally(() => {
      pool.end();
    })

  })
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





// +++ start application +++

app.listen(PORT, IP, () => {
    console.log(`Listening on port ${PORT}`);
  });