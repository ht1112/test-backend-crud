const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
const productRoute = require("./routes/product.route.js");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
   res.send("Hello World");
});

//
const pw = "ctcm14237";
mongoose
   .connect(
      `mongodb+srv://huutin1712:${pw}@backend.ew5bc.mongodb.net/node-api?retryWrites=true&w=majority&appName=Backend`
   )
   .then(() => {
      console.log("Conneted to Database!");
      app.listen(3000, () => {
         console.log("Server is running");
      });
   })
   .catch(() => {
      console.log("Failed!");
   });
