const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();

app.use(express.json());

adminPassword = 'Cel@2024';
mongoose.connect(
    `mongodb+srv://lakshmicelestial:${encodeURIComponent(adminPassword)}@cluster0.apl8aqf.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    }
);

app.use(foodRouter);

app.listen(3000, () => {
    console.log("Server is running...");
});