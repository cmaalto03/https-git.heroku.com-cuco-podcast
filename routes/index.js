var express = require('express');
var router = express.Router();
let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'sample_database',
});

router.get('/', function(req, res, next) {
  let sql = 'SELECT messages FROM sample_database.messages';
  connection.query(sql, function(err, result) {
  if (err) throw err;
  res.json(result);

})})

module.exports = router;