const express = require("express");
const courseRouter = express.Router();
const { userMiddleware } = require('../middleware/user');
const { purchaseModel, courseModel } = require('../db');

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    const course = await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "Course purchased successfully",
        course
    })
});

courseRouter.get("/all-courses", async (req, res) => {
    const courses = await courseModel.find({});
    res.json({
        courses
    })
});

module.exports = {
    courseRouter: courseRouter
}