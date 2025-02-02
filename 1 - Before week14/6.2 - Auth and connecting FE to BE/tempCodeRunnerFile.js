function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username && decodedData.password) {
        req.decodedData = decodedData;
        next();
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}