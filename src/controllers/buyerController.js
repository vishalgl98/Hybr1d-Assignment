const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "HYBR1D";

const listOfSellers = async ( req, res ) => {
    const { username, email, password, role } = req.body;
    try{
        console.log("in buyer list of seller");
    }
    catch (error){
        console.log(error);
    }
};

const sellerCatalog = async ( req, res ) => {
    const { password, email } = req.body;
    try{
        console.log("in buyer seller catalog");
    }
    catch (error) {
        console.log(error);
    }
};

const createOrder = async ( req, res ) => {
    const { password, email } = req.body;
    try{
        console.log("in buyer create order");
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = { listOfSellers, sellerCatalog, createOrder };