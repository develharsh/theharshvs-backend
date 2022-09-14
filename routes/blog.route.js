const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");

router.post("/add", blogController.add);
router.get("/get", blogController.get);
router.get("/get-by-slug/:slug", blogController.getBySlug);

module.exports = router;
