const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { UserModel, TodoModel } = require("./db");

const JWT_SECRET = "SECRET_DECODE_KEY";

(async () => {
    await mongoose.connect("mongodb+srv://jaiminsonani364:SIJbXhr9MQEaXaro@cluster0.6gvev.mongodb.net/1_TODO_database");
})();


const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        msg: "You are signed up"
    })
});

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if(user) {
        //correct
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);

        res.json({
            token: token
        })

    } else {
        //wrong
        res.status(403).json({
            msg: "Invalid username or password"
        });
    }

});

app.post("/todo", auth, function(req, res) {
    //authentication
    //get userID from token

    const userId = req.userId;
    TodoModel.create({
        title: req.body.title,
        done: req.body.done,
        userId: userId
    })
    res.json({
        userId: userId
    })

});

app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;
    const todos = await TodoModel.findOn({
        userId: userId
    })
    res.json({
        todos
    })
});

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);
    
    if(decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            msg: "Invalid token provided"
        })
    }
}




app.listen(3000, function(req, res) {
    console.log("server started listening at port 3000");
});