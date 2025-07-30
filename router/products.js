const express = require("express");
const products = require("../models/product");

const app = express.Router();

app.get("/", async (req, res) => {
    try {
        const data = await products.find();
        res.status(200).json(data);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.post("/", async (req, res) => {
    try {
        let data = new products(value);
        await data.save();
        res.status(200).json(data);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.put("/:id", async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let update = await products.findByIdAndUpdate(id);
        res.status(200).json(update);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.delete("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let delate = await products.findByIdAndDelete(id);
        res.status(200).json(delate);
    } catch (e) {
        res.status(400).json(e);
    }
});

module.exports = app;