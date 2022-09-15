const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);
