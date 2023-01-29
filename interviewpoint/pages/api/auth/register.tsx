// import { Interface } from "node:readline/promises";
import { type } from "os";
import UserModel from "../../../model/user.model";

import connect from "../../../config/db";
// const UserModel = require("../../../model/user.model");

type body = {
  Name: String;
  email: String;
  password: String;
  confirmPassword: String;
};
type data = {
  method: String;
  req: Object;
  res: Object;
  status: any;
  url: String;
  Name: String;
  email: String;
  password: String;
  confirmPassword: String;
  body: body;
};

export default async function handler(req: data, res: data) {
  await connect();
  const { method } = req;
  const { Name, email, password, confirmPassword } = req.body;
  // console.log(req.body);

  switch (method) {
    case "POST":
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
        return res
          .status(301)
          .json({ messg: "some thing went wrong", OK: "NOT" });
      }
  }
}
