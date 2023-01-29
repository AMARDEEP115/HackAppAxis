require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model");

// ***************
const express = require("express");
const app = express.Router();
const DsaModel = require("../model/dsa.model");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);
  let user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ messg: "Invalid Crediantials", OK: "OK" });
  }
  try {
    if (user.password == password) {
      let token = jwt.sign(
        { id: user._id, Name: user.Name, email },
        process.env.KEY
      );

      return res.status(200).json({ messg: user.Name, token, OK: "OK" });
    }
    return res.status(401).json({ messg: "Invalid Crediantials", OK: "NOT" });
  } catch (e) {
    return res.status(301).json({ messg: "some thing went wrong", OK: "NOT" });
  }
});

// **************signin*********

app.post("/signup", async (req, res) => {
  const { Name, email, password, confirmPassword } = req.body;
  // console.log(req.body);
  let user = await UserModel.findOne({ email });
  if (user) {
    return res
      .status(401)
      .json({ messg: "Please use different crediantilas", OK: "OK" });
  }
  try {
    let newUser = new UserModel({
      Name: Name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    await newUser.save();
    return res.status(200).json({ messg: newUser, OK: "OK" });
  } catch (e) {
    return res.status(301).json({ messg: "some thing went wrong", OK: "NOT" });
  }
});

module.exports = app;
