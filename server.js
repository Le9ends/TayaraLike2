var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var multer = require("multer");
const cors = require("cors");
var mongoose = require("mongoose");
var port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
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
  fileName: { type: String },
});
const ad = mongoose.model("ad", adSchema);
// CRUD
var add = function (req, res) {
  console.log("the file :", req.file);
  console.log("the body : ", req.body);
  ad.create(
    {
      productName: req.file.originalname,
      productPrice: req.body.price,
      description: req.body.description,
      category: req.body.category,
      fileName: req.file.filename,
      show: false,
    },
    function (err, small) {
      if (err) return console.log("error adding to the database");
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

var admin = function (req, res) {
  ad.find(
    {
      show: false,
    },
    (err, docs) => {
      res.send(docs);
    }
  );
};
var deleteOne = function (req, res) {
  ad.deleteOne({ ads: req.body.item }, function (err) {
    if (err) console.log("error deleting one item from the database ");
    console.log("successfully deleted one item from the database ");
    res.end();
  });
};

// multer
const storage = multer.diskStorage({
  destination: "./src/assets/img",
  // (req, file, cb) => {
  // cb(null, "./src/assets");
  // },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post("/upload", upload.single("imageFile"), (req, res, next) => {
  add(req, res);
  try {
    return res.status(201).json({
      message: "File uploded successfully",
    });
  } catch (error) {
    console.error(error);
  }
});
app.get("/admin", (req, res) => {
  admin(req, res);
});
app.post("/", (req, res) => {
  add(req, res);
});

app.get('/search', (req,res) => {
  ad.find({}, function(err, result) {      
    if(err) {console.log(err)}
      res.send(result)
  })
})


app.delete("/", (req, res) => {
  deleteOne(req, res);
});
app.listen(port, function () {
  console.log("Server is runing on port: http://localhost:" + port);
});
