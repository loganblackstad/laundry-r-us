var express = require("express");
var router = express.Router();
const db = require("../models");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hello");
  // res.render("index", {
  //   title: "Welcome!!",
  //   image: images,
  //   errorMessage: "",
  // });
});

module.exports = router;
