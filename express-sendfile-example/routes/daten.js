const express = require('express'),
  router = express.Router();

// get daten lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM daten`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Daten lists retrieved successfully"
    })
  })
});

// create new user
router.post('/new', function(req, res) {
    let sql = `INSERT INTO users(name, gender) VALUES (?)`;
    let values = [
      req.body.name,
      req.body.gender
    ];
    db.query(sql, [values], function(err, data, fields) {
      if (err) throw err;
      res.json({
        status: 200,
        message: "New user added successfully"
      })
    })
  });

module.exports = router;