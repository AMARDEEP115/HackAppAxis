const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Name: String,
    email: String,
    password: String,
    confirmPassword: String,
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
