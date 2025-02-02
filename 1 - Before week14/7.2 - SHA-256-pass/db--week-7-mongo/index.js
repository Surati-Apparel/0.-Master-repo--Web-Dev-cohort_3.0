const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const z = require("zod");

(async () => {
    await mongoose.connect("mongodb+srv://jaiminsonani364:SIJbXhr9MQEaXaro@cluster0.6gvev.mongodb.net/1_TODO_database");
})();

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        name: z.string().min(3).max(100)
    })
    
    // const parsedBody = requiredBody.parse(req.body);
    const parsedBodyWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedBodyWithSuccess.success) {
        res.status(400).json({
            message: "Invalid body",
            error: parsedBodyWithSuccess.error
        })
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    //hash
    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if(!response) {
        res.status(403).json({
            message: "Invalid creds"
        });
        return;
    }

    const passMatch = await bcrypt.compare(password, response.password);


    if (passMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000, () => {
    console.log("Server started"); 
});