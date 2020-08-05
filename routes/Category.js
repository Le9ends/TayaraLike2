const express    = require("express");
const categories = express.Router();
const Category = require("../models/category.js");
const cors = require("cors");
categories.use(cors());

categories.post("/categories", (req,res)=> {
    Category.create(req.body).then((category) => {
        res.json(category.name + ' created category')
    }).catch((err)=>{
        res.send("error: " + err)
    })
})

categories.get("/getCategory",(req,res) => {
    Category.find({},(err,result) => {
        // console.log(req)
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = categories;