const express = require("express");
const sellerRoutes = express.Router();

sellerRoutes.post("/create-catalog", (req, res) => {
    res.send('create a catalog for a seller');
});

sellerRoutes.get("/orders", (req, res) => {
    res.send('list of orders recieved by seller');
});

module.exports = sellerRoutes;