const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

courseRouter.get("/all-courses", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
});

module.exports = {
    courseRouter: courseRouter
}