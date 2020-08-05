const express = require("express");
const searches = express.Router();

const Search = require("../models/Search")
const Product = require("../models/Product")


searches.get('/search', (req,res) => {
    Search.findOne({}, function(err) {
        if(err) {console.log(err)}
        console.log('found')
    })
})


module.exports = searches