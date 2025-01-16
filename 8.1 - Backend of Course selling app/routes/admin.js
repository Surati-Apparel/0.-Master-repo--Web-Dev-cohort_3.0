const Router = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_SECRET } = require('../config');

adminRouter.post("/signup", async (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    //insert in db
    await adminModel.create({
        username,
        password,
        firstName,
        lastName
    })

    res.json({
        message: "signup succeeded"
    })
});

adminRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    //bcrypt compare function to lookup the password from database
    const admin = await adminModel.findOne({
        username: username,
        password: password
    });

    if(!admin) {
        res.status(403).json({
            message: "incorrect credentials"
        })
        return;  
    } 

    //create a JWT
    const token = jwt.sign({
        adminId: admin._id
    }, JWT_ADMIN_SECRET);
    
    //do cookie logic here
    res.json({
        token
    });
});

adminRouter.post("/course", async (req, res) => {
    const adminId = req.adminId;
    const { title, description, price, imageUrl } = req.body;

    // insert in db
    const course = await courseModel.create({
        title, 
        description,
        price,
        imageUrl,
        creatorId: adminId
    }) 

    res.json({
        message: "course created",
        courseId: course._id
    })
});

adminRouter.put("/course", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

module.exports = {
    adminRouter: adminRouter
}