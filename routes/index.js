var express = require("express");
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/", function (req, res, next) {
  if (req.body.author !== "" || req.body.message !== "") {
    messages.push({
      text: req.body.message,
      user: req.body.author,
      added: new Date(),
    });
  }

  res.redirect("/");
});

module.exports = router;
