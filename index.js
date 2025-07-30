const express = require("express");
const mongoose = require("mongoose");
const product = require("./router/products");
const cors = require("cors")

mongoose
    .connect("mongodb+srv://kkaxxarovv:hIQLkT2k0G0IJ5YV@cluster0.u7pokh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("connect db"))
    .catch((e) => console.log({ message: e.message }))


const app = express();
app.use(cors());

app.use(express.json());
app.use("/products", product);

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`server started on port ${port}`) })