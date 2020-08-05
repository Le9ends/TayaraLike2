const express    = require("express");
const categories = express.Router();
const Product = require("../models/Product.js");
const cors = require("cors");
categories.use(cors());

categories.post("/categories", (req,res)=> {
    Product.create(req.body).then((category) => {
        res.json(products.category + ' created category')
    }).catch((err)=>{
        res.send("error: " + err)
    })
})

categories.get("/getCategory",(req,res) => {
    Product.find({},(err,result) => {
        // console.log(req)
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = categories;