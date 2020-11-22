const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const FormData = require("./database/FormData");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/feedback", {
    useNewUrlParser: true,
  })
  .then(() => "You are now connected to Mongo!")
  .catch((err) => console.error("Something went wrong", err));

mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.render("index");
});


app.post("/post/feedback", async (req, res) => {
  await FormData.create(req.body, (error, post) => {
    res.render("feedbackSuccess");
  });
});

let port = process.env.PORT || "4000";

app.listen(port, function () {
  console.log("Server started on port 4000");
});
