const express = require("express");
const router = express.Router();

const Message = require("../models/message");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const messages = await Message.find();

  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/", async function (req, res, next) {
  if (req.body.author !== "" || req.body.message !== "") {
    const newMsg = new Message({
      text: req.body.message,
      user: req.body.author,
      added: new Date(),
    });

    await newMsg.save();
  }

  res.redirect("/");
});

module.exports = router;
