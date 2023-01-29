require("dotenv").config();

const express = require("express");
const connect = require("./config/db");
const PORT = process.env.PORT || 8080;
const UserRoute = require("./routes/user.route");
const cors = require("cors");
const DsaRoute = require("./routes/dsa.route");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", DsaRoute);
app.use("/user", UserRoute);

app.listen(PORT, async () => {
  await connect();
  console.log("working");
});
