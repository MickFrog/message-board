require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
// const newFormRouter = require("./routes/newform");

const app = express();

const mongoose = require("mongoose");

// setup connection to mongoDB
mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGO_KEY;

async function main() {
  await mongoose.connect(mongoDB);
}

// connect to mongoDB
main().catch((err) => console.log(err));

// add seed data
// populateDB().catch((err) => console.log("Populating error"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/new", newFormRouter);

module.exports = app;
