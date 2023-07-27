const express = require("express");
const { auth, checkRole } = require("../middlewares/auth");
const { listOfSellers, sellerCatalog, createOrder } = require("../controllers/buyerController");
const buyerRoutes = express.Router();

buyerRoutes.get("/list-of-sellers", auth, checkRole(["buyer"]), listOfSellers);
buyerRoutes.get("/seller-catalog/:seller_id", auth, checkRole(["buyer"]), sellerCatalog);
buyerRoutes.post("/create-order/:seller_id", auth, checkRole(["buyer"]), createOrder);

module.exports = buyerRoutes;