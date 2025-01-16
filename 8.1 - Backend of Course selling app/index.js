const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter} = require("./routes/admin");


const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);









 


async function main() {
    await mongoose.connect("mongodb+srv://jaiminsonani364:SIJbXhr9MQEaXaro@cluster0.6gvev.mongodb.net/2_course_selling_app");
    
    app.listen(3000, ()=> {
        console.log("sevver stared on http://localhost:3000");
    })
}

main();




