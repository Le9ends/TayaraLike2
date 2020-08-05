const mongoose = require('mongoose')
const Schema = mongoose.Schema

const searchSchema = new Schema({
    text : String
})

module.exports = Search = mongoose.model('searches', searchSchema )