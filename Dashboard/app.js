const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path')

// Serves Express Yourself website
app.use(express.static('public'));

// Use functions from other files
const { pool } = require('./tools/db');
const { testConnectWithDB, callDatasets } = require('./tools/db');

//testConnectWithDB();
//callDatasets([1,2,3,4,5]);

// for testing purpose
var mariadbObject;
var mariadb = require('mariadb');
//TODO: Add dotenv package with Dotenv environment variables from .env files
mariadb.createConnection({
    host: '192.168.0.119', // Replace with your host name
    port: '3306', // Replace with your database port, default 3306
    user: 'root', // Replace with your database username
    password: 'root', // Replace with your database password
    database: 'wetter', // Replace with your database Name
    connectionLimit: 5 
})
.then(connection => {
  connection.query("SELECT * FROM Daten LIMIT 3")
  .then(getData => {
    mariadbObject = getData;
    connection.end();
  })
  .catch(err => {
    console.log("Daten wurden nicht uebergeben");
  });
})
.catch(err => {
  console.log("Verbindung konnte nicht aufgebaut werden");
})

//




app.get('/', (req, res, next) => {
  console.log("mariadbObject");
  res.send('Hallo')
});

app.get('/test1', (req, res, next) => {
  console.log(mariadbObject);
//  console.log(dbCollectedData);
  res.send(mariadbObject);
});

//TODO: https://bm.enthuses.me/buffered.php?bref=729

app.get('/callTestData', (req, res, next) => { //! IS WORKING
  let queryString = "SELECT * FROM Daten LIMIT 1";
  pool.getConnection()
  .then(connection => {
    connection.query(queryString)
    .then((rows) => {
      let collectedData = JSON.stringify(rows);
      let dataCollection = JSON.parse(collectedData);
      console.log(dataCollection[0]);
      res.send(data = dataCollection[0]);
    })
  })
});



const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });