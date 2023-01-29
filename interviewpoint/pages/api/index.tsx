import { type } from "os";
import connect from "../../config/db";
import DsaModel from "../../model/dsa.model";

type data = {
  method: String;
  req: Object;
  res: Object;
  status: any;
};
export default async function handler(req: data, res: data) {
  await connect();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        let dsaQue = await DsaModel.find();
        return res.status(200).json({ messg: dsaQue, OK: "OK" });
      } catch (e) {
        return res
          .status(301)
          .json({ messg: "some thing went wrong", OK: "NOT" });
      }
    default: {
      return res.status(500).send({ messg: "something went wrong", OK: "OK" });
    }
  }
}
