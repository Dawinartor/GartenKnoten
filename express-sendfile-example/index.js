const express = require('express'),
  app = express(),
  mariadb = require('mariadb'), // import mysql module
  cors = require('cors'),
  bodyParser = require('body-parser');

// setup database
db = mariadb.createConnection({
  host: '192.168.0.119',
  user: 'root',
  password: 'root',
  database: 'wetterTestdaten'
})

// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

// routers
const datenRouter = require('./routes/daten');

// use the modules
app.use(cors())
app.use(bodyParser.json());

// use router
app.use('/users', usersRouter);

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));