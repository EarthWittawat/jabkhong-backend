const express = require("express");
const router = express.Router();
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'jabkhong.ckj2cg17krub.us-east-1.rds.amazonaws.com',
    port:  '3306',
    user: 'admin',
    password: 'jabkhong2023',
    database: 'jabkhong'
    });

router.get('/report', function (req, res, next) {
    connection.query(
      'SELECT * FROM `report`',
      function(err, results, fields) {
        res.end(results);
      }
    );
  });

module.exports = router;