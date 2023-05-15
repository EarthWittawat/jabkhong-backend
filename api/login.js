const express = require("express");
const router = express.Router();
const mysql = require('mysql2')
const cors = require('cors');
const connection = mysql.createConnection({
  host: process.env.HOST,
  port:   process.env.PORT,
  user:  process.env.USER,
  password:  process.env.PASSWORD,
  database:  process.env.DATABASE
  });
  router.use(cors());
  router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://jabkhong.vercel.app'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  router.get('/', async (req, res) => {
    try{
    connection.query(
      'SELECT * FROM `users`',
      function(err, results, fields) {
        res.json(results);
      }
    );
    } catch(error){
        console.error(error);
        return res.status(500).send("Server error");
    }
});
router.post('/', (req, res) => {
    const id_card = req.body.id_card
    const tel = req.body.tel
    connection.query(
      "SELECT * FROM `users` WHERE id_card = ? AND tel = ?",
      [id_card, tel],
      function(err, results, fields) {
        res.send(results);
        if(err){
            res.send({err :err});
        }
        if(results.length > 0){
            res.send(results);
        }
        else{
            res.send({message : "Wrong Information"});
        }
      }
    );
});


module.exports = router