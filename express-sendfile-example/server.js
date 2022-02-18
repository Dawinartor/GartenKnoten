
var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;
const port = process.env.PORT || 8008;

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });


app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log('Server started at http://localhost:' + port);
