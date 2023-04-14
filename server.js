// this app is in english
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5001;

app.use(express.json());
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I'm the middleware running, the url is", req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", (req, res) => {
  res.send("create");
});

app.get("/create/new", (req, res) => {
  res.render("New", {});
});
//
//
//
app.listen(PORT, () => {
  console.log(`Server vibe'n on port: ${PORT}`);
  // removes warning
  mongoose.set("strictQuery", true);
  //
  // connet to mongodb
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("connected to mongooooooos");
  });
});
