const express = require('express');
const app = express();
const path = require('path')

// Serves Express Yourself website
app.use(express.static('public'));

// Use functions from other files
const { callHelligkeit } = require('./public/js/script');
const { testConnectWithDB, callDatasets } = require('./tools/db');

//connectWithDB();
testConnectWithDB();


//callHelligkeit([1,2,3,4,5]);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });