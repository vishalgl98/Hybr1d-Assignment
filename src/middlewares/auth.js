const jwt = require("jsonwebtoken");
const SECRET_KEY = "HYBR1D";

const auth = (req, res, next) => {
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(' ')[1];
            let user = jwt.verify(token, SECRET_KEY);
            req.user = user.id;
        }
        else
            res.json({ message : "Unauthorized user" });
        next();
    }
    catch(error){
        console.log(error);
        res.json({ message : "Unauthorized user" });
    }
};

const checkRole = (role) => (req, res, next) => {
    try{        
        let token = req.headers.authorization;
        token = token.split(' ')[1];
        const decoded = jwt.verify(token, SECRET_KEY);
        if(!role.includes(decoded.role)){
            res.json({ message : "Unauthorized user in check role" });
        }
        else
            next();
    }
    catch(error){
        console.log(error);
        res.json({ message : "Unauthorized user in check role" });
    }
};

module.exports = { auth, checkRole };