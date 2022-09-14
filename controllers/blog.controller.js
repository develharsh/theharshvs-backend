const blogModel = require("../models/blog.model");
// const mongoose = require("mongoose");

module.exports.add = async (req, res) => {
  try {
    req.body.slug = req.body.topic;
    await blogModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Posted Successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.get = async (_, res) => {
  try {
    const blogs = await blogModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Fetched Blogs",
      blogs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports.getBySlug = async (req, res) => {
  try {
    const blog = await blogModel.findOne({ slug: req.params.slug });
    if (!blog) throw { message: "No Such Blog Found" };
    res.status(200).json({
      success: true,
      message: "Fetched Blog",
      blog,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
