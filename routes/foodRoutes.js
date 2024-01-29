const express = require("express");
const foodModel = require("../models/food");
const app = express();

app.get("/foods", async (request, response) => {
    const foods = await foodModel.find({});

    try {
        response.send(foods);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.post("/foods", async (request, response) => {
    const food = new foodModel(request.body);

    try {
        await food.save();
        response.send(`Added follwing to food list ${food}`);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.put("/foods/:id", async (request, response) => {
    try {
        const food = await foodModel.findByIdAndUpdate(request.params.id, request.body);
        await food.save();
        response.send(`edited for id ${request.params.id}`);
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});

app.delete("/foods/:id", async (request, response) => {
    try {
        const food = await foodModel.findByIdAndDelete(request.params.id);

        if (!food) response.status(404).send("No item found");
        response.status(200).send(`deleted successfuly for id${request.params.id}`);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;