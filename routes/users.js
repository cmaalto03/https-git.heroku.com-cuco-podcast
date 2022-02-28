var express = require('express');
var router = express.Router();
let mysql = require('mysql');

let connection = mysql.createPool({
  host     : 'us-cdbr-east-05.cleardb.net',
  user     : 'b0276d352c36e2',
  password : '52f2771c',
  database : 'heroku_6beac99d926d92f',
});


router.get('/', function(req, res, next) {
 let sql = 'SELECT * FROM heroku_6beac99d926d92f.messages;';
 connection.query(sql, function(err, result) {
   if (err) throw err;
  res.json(result);
})

})

module.exports = router;