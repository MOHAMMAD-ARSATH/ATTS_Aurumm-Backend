const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL)
  .then(() => console.log("✅ MongoDB Connection Successful"))
  .catch((err) => console.log("❌ MongoDB Connection Failed:", err));

module.exports = mongoose;
