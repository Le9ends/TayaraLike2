const express = require("express");
const products = express.Router();

const Product = require("../models/Product")

products.post('/products', (req,res) => {
    Product.create({}, function(err) {
        if(err) {console.log(err)}
        console.log('found')
    })
})

module.exports = products