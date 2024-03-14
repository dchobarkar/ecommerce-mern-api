const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const CryptoJS = require("crypto-js");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend servre is running");
});
