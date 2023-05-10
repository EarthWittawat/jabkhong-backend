const express = require("express");
const app = express();
const report = require("./api/report");

app.use(express.json({extends: false}));

app.use("/api/report",report);
const PORT = process.env.port || 8000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;