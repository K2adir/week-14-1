require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 5001;
const logs = require("./models/logs");
const logsSchema = require("./models/logsSchema");

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use((req, res, next) => {
  console.log("I'm the middleware running, the url is", req.url);
  next();
});

app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  console.log(req.body);

  logs.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});

app.get("/logs/new", (req, res) => {
  res.render("New", {});
});

app.listen(PORT, () => {
  console.log(`Server vibe'n on port: ${PORT}`);
  mongoose.set("strictQuery", true);

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
});
