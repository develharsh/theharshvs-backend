const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");

router.post("/add", blogController.add);

module.exports = router;
