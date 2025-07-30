const express = require("express");
const mongoose = require("mongoose");
const product = require("./router/products");

mongoose
    .connect("mongodb+srv://kkaxxarovv:hIQLkT2k0G0IJ5YV@cluster0.u7pokh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("connect db"))
    .catch((e) => console.log({ message: e.message }))


const app = express();

app.use(express.json());
app.use("/products", product);

app.listen(3000, () => { console.log("server started on port 3000") })
