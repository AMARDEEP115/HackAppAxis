import mongoose from "mongoose";

const dsaSchema = new mongoose.Schema({
  Link: String,
  difficuly: String,
  Topic: String,
  Name: String,
});

var DsaModel = mongoose.models.dsa || mongoose.model("dsa", dsaSchema);

export default DsaModel;
