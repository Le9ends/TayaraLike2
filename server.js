var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
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
    useUnifiedTopology: true 
    })
    .then(() => console.log("MongoDB Connected"))
    .catch (err => console.log(err))



var Users = require("./routes/Users");
//Users
app.use("/users", Users);

// model of the ADS
const adSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const ad = mongoose.model("ad", adSchema);
// CRUD
var add = function (req, res) {
  ad.create(
    {
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      description: req.body.description,
      category: req.body.category,
      show: false,
    },
    function (err, small) {
      if (err) console.log("error adding to the database");
      console.log("added successfully to the database");
      res.end();
    }
  );
};
var select = function (req, res) {
  ad.find(
    {
      category: req.body.category,
    },
    (err, docs) => {
      res.send(docs);
    }
  );
};
app.get("/category", (req, res) => {
  console.log(res)
  select(req, res);
});

var deleteOne = function (req, res) {
  ad.deleteOne({ ads: req.body.item }, function (err) {
    if (err) console.log("error deleting one item from the database ");
    console.log("successfully deleted one item from the database ");
    res.end();
  });
};

app.post("/", (req, res) => {
  add(req, res);
});

app.get('/search', (req,res) => {
  ad.find({}, function(err, result) {      
    if(err) {console.log(err)}
      res.send(result)
      // console.log(result[0])
  })
})

app.delete("/", (req, res) => {
  deleteOne(req, res);
});

app.listen(port, function () {
  console.log("Server is runing on port: http://localhost:" + port);
});
