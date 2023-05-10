const express = require('express'),
app = express(),
cors = require('cors'),
bodyParser = require('body-parser');
const mysql = require('mysql2')

const connection = mysql.createConnection({
host: 'jabkhong.ckj2cg17krub.us-east-1.rds.amazonaws.com',
port:  '3306',
user: 'admin',
password: 'jabkhong2023',
database: 'jabkhong'
});
var server = {
  port: 4040
};

app.use(cors())
app.use(bodyParser.json());

app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));
app.get('/report', function (req, res, next) {
    connection.query(
      'SELECT * FROM `report`',
      function(err, results, fields) {
        console.log(results);
        res.json(results);
      }
    );
  })