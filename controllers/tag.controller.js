const tagModel = require("../models/tag.model");

module.exports.add = async (req, res) => {
  try {
    const tag = await tagModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Posted Successfully",
      tag
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports.get = async (req, res) => {
  try {
    const tags = await tagModel.find();
    res.status(200).json({
      success: true,
      message: "Fetched Tags",
      tags,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
