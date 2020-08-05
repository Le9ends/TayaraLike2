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


mongoose
    .connect("mongodb://localhost:27017/tayaraLike", {
    useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch (err => console.log(err))

//Users
var Users = require("./routes/Users")
app.use('/users', Users) 

//Search
var Search = require('./routes/Search.js')
app.use('/search', Search)

//Product
var Product = require('./routes/Product.js')
app.use('/products', Product)


app.listen(port, function() {
    console.log("Server is runing on port: http://localhost:" + port);
  });
  
