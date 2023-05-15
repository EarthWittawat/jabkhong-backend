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
    const name = req.body.name
    const id_card = req.body.id_card
    const tel = req.body.tel
    try{
    connection.query(
      "INSERT INTO `users` (name, id_card, tel) VALUES (?,?,?)",
      [name, id_card, tel],
      function(err, results, fields) {
        res.json(results);
      }
    );
    } catch(error){
        console.error(error);
        return res.status(500).send("Server error");
    }
});


module.exports = router