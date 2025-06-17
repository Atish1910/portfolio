const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNum: Number,
  message: String,
});

module.exports = mongoose.model("FormData", formDataSchema);
