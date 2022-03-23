const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 4001;


// Serves Express Yourself website
app.use(express.static('public'));


// Use functions from other files
const { pool } = require('./tools/db');
const { testConnectWithDB, callDatasets, getDataBySpecificDate } = require('./tools/db');
const { testOutput, getAllDates, getDataByIntervall } = require('./tools/CollectData');


//* --- GET methods ---

//! this is the landingpage 
app.get('/', (req, res, next) => {
  res.send('Hallo');
});


// TODO: Extend the application with a GET method to collect data from the server in a intervall
//app.get('/collectDataFromDB/:howManyDatasets', (req, res, next) => {

// End-point to collect all data from DB
app.get('/collectAllDataFromDB', (req, res, next) => {

  /*
  // array with all date elements
  let dateArray = [];
  // collection array
  let collArr = [];

  // call first all Data of Datum tabel to show all available dates
  pool.getConnection()
  .then(connection => {
    connection.query('SELECT * FROM Daten')
    .then((rows) => {
      dateArray = getAllDates(rows);
      //console.log(dateArray);
      collArr = getDataByIntervall(dateArray[0], dateArray[dateArray.length - 1]);
      res.send(collArr);
    })
  })
})
*/

let test = getAllDates();
console.log(test);

});




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




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });