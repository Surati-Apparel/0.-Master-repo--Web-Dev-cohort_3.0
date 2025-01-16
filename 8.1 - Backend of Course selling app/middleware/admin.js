const { jwt } = require("jsonwebtoken");
const JWT_ADMIN_SECRET = require('../config')

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded  = jwt.verify(token, JWT_ADMIN_SECRET);

    if(!decoded) {
        res.json({
            msg: "You are not signed in"
        })
    } 

    req.adminId = decoded.adminId;
    next();
}

module.exports = {
    adminMiddleware
}