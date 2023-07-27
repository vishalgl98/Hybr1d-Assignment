const express = require("express");
const buyerRoutes = express.Router();

buyerRoutes.get("/list-of-sellers", (req, res) => {
    res.send('list-of-sellers');
});

buyerRoutes.get("/seller-catalog/:seller_id", (req, res) => {
    res.send('catalog of a seller');
});

buyerRoutes.post("/create-order/:seller_id", (req, res) => {
    res.send('list of items to create an order');
});

module.exports = buyerRoutes;