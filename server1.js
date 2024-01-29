const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");
require('dotenv').config();
const app = express();

app.use(express.json());
mongoose.connect(
    process.env.URL,
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    }
);

app.use(foodRouter);

app.listen(process.env.PORT, () => {
    // console.log(process.env.PASS, "testing");
    console.log("listening to port ", process.env.PORT);
    console.log("Server is running...");
});