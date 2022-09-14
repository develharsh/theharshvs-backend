const mongoose = require("mongoose");
const URLSlug = require("mongoose-slug-generator");

const blogSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      slug: "topic",
      unique: true,
    },
    content: {
      type: String,
    },
    tags: [],
  },
  { timestamps: true }
);

mongoose.plugin(URLSlug);

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
