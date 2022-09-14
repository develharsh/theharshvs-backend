const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
});

module.exports = mongoose.models.Tag || mongoose.model("Tag", tagSchema);
