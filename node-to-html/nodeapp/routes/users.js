var express = require('express');
var router = express.Router();
var db = require('../database'); // use other script from local project folder

/* GET users listing. */
router.get('/user-list', function(req, res, next) {
  var sql_call = 'SELECT * FROM Daten';
  db.query(sql_call, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});

module.exports = router;
