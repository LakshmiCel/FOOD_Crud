const express = require("express");
const db = require("./index");
const app = express();
// app.listen(3000, () => {
//     console.log("connecteed to the 3000 port on node js server ");
// })
db.mongoConnect((client) => {
    console.log(client);
    app.listen(3000)
})