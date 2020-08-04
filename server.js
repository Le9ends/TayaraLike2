var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require('mongoose')
var port = process.env.PORT || 5000;

// const path = require("path");

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("mongoose connected");
// });

mongoose
    .connect("mongodb://localhost:27017/tayaraLike", {
    useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch (err => console.log(err))

var Users = require("./routes/Users")
//Users
app.use('/users', Users)

app.listen(port, function() {
    console.log("Server is runing on port: http://localhost:" + port);
  });
  
