const express = require("express");
const app = express();

app.post("/users/signup", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
});

app.post("/users/signin", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});


app.get("user/purchases", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

app.post("/courses/purchase", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

app.get("/courses", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});





app.listen(3000, ()=> {
    console.log("sevver stared on http://localhost:3000");
})




