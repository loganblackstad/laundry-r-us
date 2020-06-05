var express = require("express");
var router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const { invoice_number, total, currency } = req.body;
  db.Invoice.create({
    invoice_number,
    total,
    currency,
  }).then((result) => {
    res.redirect("/invoices");
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.send("hello");
  db.Invoice.findAll().then((results) => {
    console.log(results[0]);
    res.render("invoices.ejs", {
      invoices: results,
    });
  });
});

module.exports = router;
