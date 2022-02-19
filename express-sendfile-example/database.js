// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');
 
// Create a connection pool
var pool = mariadb.createPool({
  host: "localhost", 
  port: 8080,
  user: "root", 
  password: "root-gartenknoten",
  database: "daten"
  });

// Connect with database
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

// Expose a method to establish connection with MariaDB
module.exports = pool;