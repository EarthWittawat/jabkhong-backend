const express = require('express');
const cors = require('cors');
const app = express();
const report = require("./api/report");
const user = require("./api/user");
const reportrequest = require("./api/reportrequest");
const register = require("./api/register");
const login = require("./api/login");
app.use(express.json({extends: false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://jabkhong.vercel.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors());
app.use("/api/report",report);
app.use("/api/user",user);
app.use("/api/reportrequest",reportrequest);
app.use("/api/register",register);
app.use("/api/login",login);
const PORT = process.env.port || 8000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app