const Router = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_SECRET } = require('../config');
const { adminMiddleware } = require('../middleware/admin')

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

//create-course
//update-course
//all-courses

adminRouter.post("/create-course", adminMiddleware, async (req, res) => {
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

adminRouter.put("/update-course", adminMiddleware, async (req, res) => {
    const adminId = req.adminId;
    const { title, description, price, imageUrl, courseId } = req.body;

    // insert in db
    const course = await courseModel.findOneAndUpdate({
        _id: courseId,
        creatorId: adminId
    }, {
        title, 
        description,
        price,
        imageUrl,
        creatorId: adminId
    }) 

    res.json({
        message: "course updated",
        courseId: course._id
    })
});

adminRouter.get("/all-courses", adminMiddleware, async (req, res) => {
    const adminId = req.adminId;
    const courses = await courseModel.find({
        creatorId: adminId
    })

    res.json({
        courses 
    })
});



module.exports = {
    adminRouter: adminRouter
}