const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tag.controller");

router.post("/add", tagController.add);
router.get("/get", tagController.get);

module.exports = router;
