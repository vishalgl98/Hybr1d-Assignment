const express = require("express");
const sellerRoutes = express.Router();
const { auth, checkRole } = require("../middlewares/auth");
const { createCatalog, orders } = require("../controllers/sellerController");

sellerRoutes.post("/create-catalog", auth, checkRole(["seller"]), createCatalog);
sellerRoutes.get("/orders", auth, checkRole(["seller"]), orders);

module.exports = sellerRoutes;