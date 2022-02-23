// Die Datei die ausgeführt wird, wenn "npm start" eingegeben wird.
var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;
const port = process.env.PORT || 8008;
var usersRouter = require('./routes/users');

app.use('/users', usersRouter);


app.listen(port);
console.log('Server started at http://localhost:' + port);