import { type } from "os";

type data = {
  method: String;
  req: Object;
  res: Object;
  status: any;
  dbData: [];
};
export default async function handler(req: data, res: data) {
  const { method } = req;
  // const { datas } = req.query;
  //   await dbConnect();
  switch (method) {
    case "GET":
      return res.status(200).json({ messg: "merntopic" });
  }
}
