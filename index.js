const express = require('express');
const cors = require('cors');
const app = express();
const report = require("./api/report");
const user = require("./api/user");
const reportrequest = require("./api/reportrequest");
const register = require("./api/register");
const login = require("./api/login");
const report_waitlist = require("./api/reportwaitlist");
app.use(express.json({extends: false}));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://jabkhong.vercel.app'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
app.use(cors());
app.use("/api/report",report);
app.use("/api/user",user);
app.use("/api/reportrequest",reportrequest);
app.use("/api/register",register);
app.use("/api/login",login);
app.use("/api/reportwaitlist",report_waitlist);
const PORT = process.env.port || 8000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app