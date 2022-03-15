var mariadb = require('mariadb');

var pool = mariadb.createPool({
    host: '192.168.0.119', // Replace with your host name
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


/**
 * Converts row DB data to Javascript objects
 * 
 * @param {*} dbData - row DB data
 * @returns Javascript object
 */
function dbDataToObject(dbData) {
  let json = JSON.stringify(dbData); // Converts value to JSON
  let jsObject = JSON.parse(json); // Converts JSON to JS object
  return jsObject;
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
  pool: pool
};



/*
pool.getConnection()
.then(conn => {

conn.query("SELECT * FROM Daten LIMIT 2") // conn.query("SELECT * FROM Daten")
    .then((rows) => {
    //console.log(rows); //[ {val: 1}, meta: ... ]
    var json = JSON.stringify(rows);
    var data = JSON.parse(json);
    console.log(data[1].TEMPERATUR);
    })

    .then((res) => {
    //console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
    conn.end();
    })

    .catch(err => {
    //handle error
    console.log(err); 
    conn.end();
    })
    
}).catch(err => {
//not connected
});

*/