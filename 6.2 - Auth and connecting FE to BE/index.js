const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
const JWT_SECRET = 'secret_key';

app.use(express.json());

const users = [];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/public", "index.html"));
});

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    }) 
    res.json({
        msg: "You are signed up",
        users: users
    });
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = users.find(u => {
        if(u.username === username && u.password === password) {
            return true;
        }else{
            return false;
        }
    })

    if(foundUser) {
        const token = jwt.sign( foundUser , JWT_SECRET);
        foundUser.token = token;

        res.json({
            msg: "You are signed in",
            token: token,
            user: foundUser 
        })
        
    }else {
        res.json({
            msg: "Invalid usename and password"
        });
    }
})

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


app.get("/me", auth, (req, res) => {
    const user = users.find(user => user.username === req.decodedData.username && user.password === req.decodedData.password);
    if (user) {
        res.send({
            username: user.username,
            password: user.password
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
 })

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})