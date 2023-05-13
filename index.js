const express = require('express');
const cors = require('cors');
const app = express();
const report = require("./api/report");
const user = require("./api/user");
const reportrequest = require("./api/reportrequest");
app.use(express.json({extends: false}));
app.use(cors());

app.use("/api/report",report);
app.use("/api/user",user);
app.use("/api/reportrequest",reportrequest);
const PORT = process.env.port || 8000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app