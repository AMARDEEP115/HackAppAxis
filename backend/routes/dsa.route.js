const express = require("express");
const app = express.Router();
const DsaModel = require("../model/dsa.model");

app.get("/", async (req, res) => {
  try {
    let dsaQue = await DsaModel.find();
    return res.status(200).json({ messg: dsaQue, OK: "OK" });
  } catch (e) {
    return res
      .status(301)
      .json({ messg: "some thing went wrong", OK: "NOT", e });
  }
});

module.exports = app;
