const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  rating: { type: Number },
  category: { type: String },
  feedback: { type: String },
});

const FormData = mongoose.model("FormData", Schema);

module.exports = FormData;
