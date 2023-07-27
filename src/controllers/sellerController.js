const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "HYBR1D";

const createCatalog = async ( req, res ) => {
    const { username, email, password, role } = req.body;
    try{
        res.json({message : "in seller createcatalog"});
    }
    catch (error){
        console.log(error);
    }
};

const orders = async ( req, res ) => {
    const { password, email } = req.body;
    try{
        console.log("in seller orders");
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = { createCatalog, orders };