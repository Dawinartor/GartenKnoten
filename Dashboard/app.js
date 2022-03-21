const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path')
const moment = require('moment');
var mariadb = require('mariadb');

// Serves Express Yourself website
app.use(express.static('public'));

// Use functions from other files
const { pool } = require('./tools/db');
const { testConnectWithDB, callDatasets } = require('./tools/db');
const { convertDate } = require('./tools/CollectData');


// TODO: Extend the application with a GET method to collect data from the server in a intervall
//app.get('/collectDataFromDB/:howManyDatasets', (req, res, next) => {

// End-point to collect all data from DB
app.get('/collectDataFromDB', (req, res, next) => {

  //TODO: Add dotenv package with Dotenv environment variables from .env files
  pool.getConnection()
  .then(connection => { // in case of success
    connection.query("SELECT * FROM Daten")
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


//! this is the landingpage 
app.get('/', (req, res, next) => {
  console.log("Hello");
  res.send('Hallo');
});


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



const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });