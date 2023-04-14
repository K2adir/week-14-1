require("dotenv").config(); // call and conf dotenv package
//
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
//

const Log = require("./models/Log.js");
const logsArr = require("./models/logsArr.js");
const PORT = 5005;

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use((req, res, next) => {
  console.log("I'm the middleware running, the url is", req.url);
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
//
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
/////

app.get("/logs/new", (req, res) => {
  res.render("New", { logs: [] });
});

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  console.log(req.body);
  //
  Log.create(req.body, (error, createdLog) => {
    // res.send(createdLog);
    res.redirect("/logs");
  });
});

app.get("/logs", (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render("Index", { logs: allLogs });
  });
});

//

app.get("/logs/:id", (req, res) => {
  const index = req.params.id;
  Log.findById(req.params.id, (error, foundLogs) => {
    if (foundLogs) {
      res.render("Show", { logs: foundLogs });
    } else {
      res.status(404).send(`
          <h1>No Record</h1>
          <button onclick="window.history.back()">Go Back</button>
        `);
    }
  });
});

app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (error, deletedFruit) => {
    res.redirect("/logs");
  });
});
//
app.get("/logs/:id/edit", (req, res) => {
  Log.findById(req.params.id, (error, foundLogs) => {
    if (!error) {
      res.render("logs/edit", { logs: foundLogs });
    } else {
      res.send({ msg: error.message });
    }
  });
});

///

app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  Log.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedShip) => {
      res.redirect(`/logs/`);
    }
  );
});

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
