const express = require("express");
const router = express.Router();
const blogRoute = require("./blog.route");
const tagRoute = require("./tag.route");

// @Base Url
router.use((req, _, next) => {
  req["currentUrl"] = `${req.protocol + "://" + req.headers.host}`;
  next();
});

router.use("/blog", blogRoute);
router.use("/tag", tagRoute);

module.exports = router;
