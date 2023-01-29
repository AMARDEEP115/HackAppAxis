// import { Interface } from "node:readline/promises";
import { type } from "os";
import UserModel from "../../../model/user.model";

import connect from "../../../config/db";
const jwt = require("jsonwebtoken");
import dotenv from "dotenv";

dotenv.config();

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
  const { email, password } = req.body;
  // console.log(req.body);
  let user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ messg: "Invalid Crediantials", OK: "OK" });
  }

  switch (method) {
    case "POST":
      try {
        if (user.password == password) {
          let token = jwt.sign(
            { id: user._id, Name: user.Name, email },
            process.env.KEY
          );

          return res.status(200).json({ messg: user.Name, token, OK: "OK" });
        }
        return res
          .status(401)
          .json({ messg: "Invalid Crediantials", OK: "NOT" });
      } catch (e) {
        return res
          .status(301)
          .json({ messg: "some thing went wrong", OK: "NOT" });
      }
  }
}
