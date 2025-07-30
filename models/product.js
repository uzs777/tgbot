const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    id: Number
});

const products = mongoose.model("tavar", ProductSchema);

module.exports = products;