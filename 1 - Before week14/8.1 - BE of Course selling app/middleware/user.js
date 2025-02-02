const jwt  = require("jsonwebtoken");
const { JWT_USER_SECRET } = require('../config')

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded  = jwt.verify(token, JWT_USER_SECRET);

    if(!decoded) {
        res.json({
            msg: "You are not signed in"
        })
    } 

    req.userId = decoded.userId;
    next();
}

module.exports = {
    userMiddleware
}