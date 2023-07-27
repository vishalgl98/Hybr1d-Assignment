const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "HYBR1D";

const register = async ( req, res ) => {
    const { username, email, password, role } = req.body;
    try{
        const existingUser = await userModel.findOne({ email : email });
        if(existingUser){
            return res.json({message : 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await userModel.create({
            email : email,
            password : hashedPassword,
            username : username,
            role : role
        });
        const token = jwt.sign({email : result.email, id : result._id, role : result.role}, SECRET_KEY);
        res.json({user : result, token : token});
    }
    catch (error){
        console.log(error);
    }
};

const login = async ( req, res ) => {
    const { password, email } = req.body;
    try{
        const existingUser = await userModel.findOne({ email : email});
        if(!existingUser){
            return res.json({ message : "User not found" });
        }
        const matchedPassword = await bcrypt.compare( password, existingUser.password );
        if(!matchedPassword){
            return res.json({ message : "Wrong Password" });
        }
        const token = jwt.sign({email : existingUser.email, id : existingUser._id, role : existingUser.role}, SECRET_KEY);
        res.json({user : existingUser, token : token});
    }
    catch (error) {
        console.log(error);
    }

};

module.exports = { register, login };