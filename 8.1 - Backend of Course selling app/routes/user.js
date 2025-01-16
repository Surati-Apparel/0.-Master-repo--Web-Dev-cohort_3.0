const { Router } = require("express");
const { userModel } = require("../db");
const { JWT_USER_SECRET } = require('../config');
const userRouter = Router();
const jwt = require('jsonwebtoken');

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


userRouter.post("/course", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

userRouter.put("/course", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

userRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}