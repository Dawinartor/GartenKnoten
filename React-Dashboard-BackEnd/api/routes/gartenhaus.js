var express = require("express");
var router = express.Router();
var mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: '192.168.73.83',
    port: 8080, 
    user:'root', 
    password: 'mariadb',
    database: 'gartenKnoten'
});

pool.getConnection()
    .then(conn => {
        conn.query("SELECT 1 as val")
    });

// TODO: Test connection to database
/* TODO: Try to get values from dataBase  */
router.get('/', function(req, res, next) {

    res.send(
        pool.getConnection()
            .then(conn => {
            conn.query("SELECT * FROM `DATEN` WHERE 1")
        })
    );
  
});
  
module.exports = router;
  
