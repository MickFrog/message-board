// File not currently used
const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send('respond with a resource');
  res.render("form");
});

router.post("/", function (req, res, next) {
  console.log(req.body.author);
  console.log(req.body.message);

  res.redirect("/");
});

module.exports = router;
