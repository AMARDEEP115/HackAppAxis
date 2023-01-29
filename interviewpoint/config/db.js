import mongoose from "mongoose";
import dotenv from "dotenv";
mongoose.set("strictQuery", false);

dotenv.config();
const connect = async () => {
  mongoose.connect(process.env.DB_URL);
};
export default connect;
