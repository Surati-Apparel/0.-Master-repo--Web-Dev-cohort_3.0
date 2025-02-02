const  jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require('../config');

function adminMiddleware(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(400).json({ msg: "Token is required" });
    }

    try {
        const decoded = jwt.verify(token, JWT_ADMIN_SECRET);
        req.adminId = decoded.adminId;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ msg: "Token verification failed", error: error.message });
    }
}

module.exports = {
    adminMiddleware
}
