const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hey");
});

app.listen(5000, () => {
    console.log(' serving server');
});