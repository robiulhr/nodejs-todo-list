const express = require("express");
let ejs = require("ejs");
var bodyParser = require("body-parser");
const date = require(__dirname + "/modules/date.js");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let listdata = [];
let worklist = [];
app.get("/", function (req, res) {
  res.render("todo-list", {
    title: date.getdate(),
    list: listdata,
    submitPage: "home",
  });
});
app.post("/", function (req, res) {
  let listitem = req.body.listitem;
  let submitName = req.body.submit;
  //   console.log(listitem);

  if (submitName === "home") {
    listdata.push(listitem);
    res.redirect("/");
  } else {
    worklist.push(listitem);
    res.redirect("/work");
  }
});
app.get("/work", function (req, res) {
  res.render("todo-list", {
    title: date.getday(),
    list: worklist,
    submitPage: "work",
  });
});
app.listen(3000, () => {
  console.log("server is running on 3000");
});
