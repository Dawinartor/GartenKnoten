var mariadb = require('mariadb');

var pool = mariadb.createPool({
    host: '192.168.1.101', // Replace with your host name
    port: '3306', // Replace with your database port, default 3306
    user: 'root', // Replace with your database username
    password: 'root', // Replace with your database password
    database: 'wetter', // Replace with your database Name
    connectionLimit: 5 
  }); 


/**
 * Tests connection with remote DB
 */
function testConnectWithDB() { //? is connection object returnable?
  pool.getConnection() // promise is used here
  .then(success => { // if promise successfull
    console.log("Successfully connected");
    pool.end();
    }, noSuccess => { // if promise unsuccessfull
    console.log("No connection established"); 
    })
  //.then(success.end());
}


function getDataBySpecificDate(date) { // example by DATUM
  pool.getConnection()
  .then(connection => {
    connection.json('SELECT * FROM Daten')
    .then((rows) => {
      console.log(rows)
      return rows;
    })
    .catch(err => {
      console.log("# Daten wurden nicht uebergeben #");
    });
  })
  .catch(err => { // in case of failure
    console.log("## Verbindung konnte nicht aufgebaut werden ##");
  })
}


/**
 * Call
 * 
 * @param {*} howManyDatasets 
 */
function callDatasets(howManyDatasets=1) {
  pool.getConnection()
  .then(connection => { // optional onRejected function
    connection.query("SELECT * FROM Daten LIMIT " + String(howManyDatasets))
    .then((rows) => {
      let collectedData = dbDataToObject(rows);
      console.log(collectedData);
      return collectedData;
    })
  })
}


module.exports = {
  testConnectWithDB: testConnectWithDB,
  callDatasets: callDatasets, 
  getDataBySpecificDate: getDataBySpecificDate,
  pool: pool
};
