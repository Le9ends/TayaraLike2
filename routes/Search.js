const express = require("express");
const search = express.Router();

const Product = require("../models/Product")


search.get('/search', (req,res) => {
    Product.findOne({}, function(err) {
        if(err) {console.log(err)}
        console.log('found')
    })
})


module.exports = search