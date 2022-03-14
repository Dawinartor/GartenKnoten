const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path')

// Serves Express Yourself website
app.use(express.static('public'));

// Use functions from other files
const { pool } = require('./tools/db');
const { callHelligkeit } = require('./public/js/script');
const { testConnectWithDB, callDatasets } = require('./tools/db');

//testConnectWithDB();
//callDatasets([1,2,3,4,5]);

app.get('/', (req, res, next) => {
  console.log('Hallo');
  res.send('Hallo')
});

app.get('/test1', (req, res, next) => {
  const aObject = {
    one: 1,
    two: 2,
    string: 'I am a string'
  };
  const dbCollectedData = callDatasets();
  console.log(dbCollectedData);
  res.send(dbCollectedData);
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