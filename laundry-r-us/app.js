const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// var router = express.Router();
const app = express();
const db = require("./models");
const indexRouter = require("./routes/index");
const invoicesRouter = require("./routes/invoices");

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/invoices", invoicesRouter);
app.use(express.static("public"));

app.post("/", (req, res) => {
  const { total, currency } = req.body;
  db.Invoices.create({
    total,
    currency,
  }).then((result) => {
    res.redirect("/invoices");
  });
});
//   module.exports = router;

//routes
app.get("/index", (req, res) => {
  res.send("Hello @@@@");
  // res.json(result);
  // db.Artist.findAll().then((result) => {
  //     res.json(result);
  // })
});

db.sequelize.sync();
app.listen(PORT, () =>
  console.log(`The Server is running on Http://localhost:${PORT}`)
);
