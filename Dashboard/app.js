const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path')
const moment = require('moment');
var mariadb = require('mariadb');
const PORT = process.env.PORT || 4001;

// Serves Express Yourself website
app.use(express.static('public'));

// Use functions from other files
const { pool } = require('./tools/db');
const { testConnectWithDB, callDatasets, getDataBySpecificDate } = require('./tools/db');
const { convertDate } = require('./tools/CollectData');


// TODO: Extend the application with a GET method to collect data from the server in a intervall
//app.get('/collectDataFromDB/:howManyDatasets', (req, res, next) => {

// End-point to collect all data from DB
app.get('/collectAllDataFromDB', (req, res, next) => {

  // array with all date elements
  let dateArray = [];

  // call first all Data of Datum tabel 
  pool.getConnection()
  .then(connection => {
    connection.query('SELECT * FROM Daten')
    .then((rows) => {
      rows.forEach(element => {
        dateArray.push({
          "Datum": element.DATUM,
          "Zeit":  element.ZEIT
        });
      });
      console.log(dateArray);
    })


  // iterate through each datum to get the dataset
  .then(connection => {
    //connection.query('SELECT * FROM Daten WHERE Datum=' + )
    connection.query('SELECT * FROM Daten')
    .then((rows) => {
      console.log(rows[0]);
    })
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



//* --- Connect to database ---
function connectDB() {
  return pool.getConnection()
}


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });