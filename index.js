const app = require('express')();
const { v4 } = require('uuid');

const mysql = require('mysql2')

const connection = mysql.createConnection({
host: 'jabkhong.ckj2cg17krub.us-east-1.rds.amazonaws.com',
port:  '3306',
user: 'admin',
password: 'jabkhong2023',
database: 'jabkhong'
});

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
app.get('/report', function (req, res, next) {
    connection.query(
      'SELECT * FROM `report`',
      function(err, results, fields) {
        res.end(results);
      }
    );
  });
module.exports = app;