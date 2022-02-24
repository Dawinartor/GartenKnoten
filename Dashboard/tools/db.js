var mariadb = require('mariadb');

var pool = mariadb.createPool({
    host: '192.168.0.119',  // Replace with your host name
    port: '3306', 
    user: 'root',     // Replace with your database username
    password: 'root',      // Replace with your database password
    database: 'wetter',
    connectionLimit: 5 // Replace with your database Name
  }); 


pool.getConnection()
.then(conn => {

conn.query("SELECT * FROM users") // conn.query("SELECT * FROM Daten")
    .then((rows) => {
    console.log(rows); //[ {val: 1}, meta: ... ]
    //Table must have been created before 
    // " CREATE TABLE myTable (id int, val varchar(255)) "
    //return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    })

    .then((res) => {
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
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

module.exports = pool;