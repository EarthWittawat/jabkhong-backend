const express = require('express');
const app = express();
const report = require("./api/report");
const user = require("./api/user");
app.use(express.json({extends: false}));

app.use("/api/report",report);
app.use("/api/user",user);
const PORT = process.env.port || 8000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app