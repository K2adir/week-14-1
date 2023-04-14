const mongoose = require("mongoose");

const logsSchema = mongoose.Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Log", logsSchema);
