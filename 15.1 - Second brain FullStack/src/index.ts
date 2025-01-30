import express from "express";
import mongoose from "mongoose";
import { ContentModel, UserModel } from "./db";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config'
import { userMiddleware } from './middleware'

const app = express();
app.use(express.json());



app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //enter this in user database
    //TODO: zod, hash password: bcrypt
    await UserModel.create({
        username,
        password
    })

    res.json({
        msg: `you are signed up ${username}`
    })
})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = await UserModel.findOne({
        username,
        password
    })

    if(!foundUser) {
        res.json({ msg: `This user does not exist : ${username}` })
        return;
    }

    //return jwt token
    const token = jwt.sign({id: foundUser._id} , JWT_SECRET);
    res.json({
        msg: `successfully signed in: ${username}`,
        token
    })
})

app.post("/api/v1/create-content", userMiddleware, async (req, res) => {
    const {title, link} = req.body;
    //@ts-ignore
    const userId = req.userId;

    const content = await ContentModel.create({
        title, link, userId
    })

    res.json({
        msg: "content added in database",
        contentId: content._id
    })
})

app.get("/api/v1/find-content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;

    const contents = await ContentModel.find({
        userId
    }).populate("userId")

    res.json({
        contents
    })

})

app.delete("/api/v1/share", userMiddleware, async (req, res) => {
    
})

app.delete("/api/v1/share:link", userMiddleware, async (req, res) => {
    
})



async function main () {
    const MONGO_URL = "mongodb+srv://jaiminsonani364:SIJbXhr9MQEaXaro@cluster0.6gvev.mongodb.net/3_brainly-app-database";
    await mongoose.connect(MONGO_URL);
    app.listen(3000, ()=>{
        console.log("server started at port 3000");
    })
}

main ();



//.d.ts