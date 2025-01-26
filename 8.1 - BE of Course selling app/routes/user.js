const { Router } = require("express");
const { userModel, purchaseModel } = require("../db");
const { JWT_USER_SECRET } = require('../config');
const userRouter = Router();
const jwt = require('jsonwebtoken');
const { userMiddleware } = require("../middleware/user");

userRouter.post("/signup", async (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    //1. zod validation
    //2. hash password
    //3. try...catch

    //insert in db
    await userModel.create({
        username,
        password,
        firstName,
        lastName
    })

    res.json({
        message: "signup succeeded"
    })
});

userRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    //bcrypt compare function to lookup the password from database

    const user = await userModel.findOne({
        username: username,
        password: password
    });

    if(!user) {  
        res.status(403).json({
            message: "incorrect credentials"
        })
        return;
    }

    const token = jwt.sign({
        userId: user._id
    }, JWT_USER_SECRET);

    //do cookie logic here
    res.json({
        token
    });
});


userRouter.get("/purchases", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const courses = await purchaseModel.find({
        userId
    });
    res.json({
        courses
    })
});

module.exports = {
    userRouter: userRouter
}