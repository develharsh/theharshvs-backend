const blogModel = require("../models/blog.model");
const mongoose = require("mongoose");

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
