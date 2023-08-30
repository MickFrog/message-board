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

/* GET users listing. */
router.get("/new", function (req, res, next) {
  // res.send('respond with a resource');
  res.render("form");
});

router.post("/new", function (req, res, next) {
  console.log(req.body.author);
  console.log(req.body.message);
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
