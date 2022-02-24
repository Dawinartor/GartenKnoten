const express = require('express');
const app = express();
const path = require('path')

// Serves Express Yourself website
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });