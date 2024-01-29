require('./server1.js');


const express = require('express');
var app = express();
const path = require('path');
const expressHbs = require("express-handlebars");
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended: true
}));

//Create a welcome message and direct them to the main page
app.get('/', (req, res) => {
    res.send(`
 
<h2 style="font-family: Malgun Gothic; color: midnightblue ">Welcome to Edureka Node.js MongoDB Tutorial!!</h2>
 
 
 Click Here to go to <b> <a href="/foods">Todo Page</a> </b>`);
});
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
const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Set the Controller path which will be responding the user actions
app.use("/api", foodRoutes);