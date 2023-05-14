const express = require('express');
const cors = require('cors');
const app = express();
const report = require("./api/report");
const user = require("./api/user");
const reportrequest = require("./api/reportrequest");
const register = require("./api/register");
app.use(express.json({extends: false}));
app.use(cors());

app.use("/api/report",report);
app.use("/api/user",user);
app.use("/api/reportrequest",reportrequest);
app.use("/api/register",register);
const PORT = process.env.port || 8000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app