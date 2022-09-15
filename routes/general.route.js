const express = require("express");
const router = express.Router();
const generalController = require("../controllers/general.controller");

router.post("/add-subscriber", generalController.addSubscriber);

module.exports = router;
