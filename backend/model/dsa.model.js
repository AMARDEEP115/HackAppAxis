const mongoose = require("mongoose");

const dsaSchema = new mongoose.Schema({
  Link: String,
  difficuly: String,
  Topic: String,
  Name: String,
});

var DsaModel = mongoose.model("dsa", dsaSchema);

module.exports = DsaModel;
