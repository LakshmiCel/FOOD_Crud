require('./server1.js');
require('dotenv').config();

const express = require('express');
var app = express();

const path = require('path');
const expressHbs = require("express-handlebars");
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended: true
}));


app.use(bodyparser.json());

app.engine(
    "hbs",
    expressHbs.engine({
        extname: "hbs",
        defaultLayout: false,
        layoutsDir: "views/layouts/"
    })
);
app.set("view engine", "hbs");
app.set("views", "views");

const foodRoutes = require("./routes/foodRoutes.js");
const port = process.env.PORT;
// app.listen(port, () => console.log(`Listening on port ${port}..`));

app.use("/api", foodRoutes);