const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const categoriesSchemas = new Schema ( 
    name = {
    type: String,
    required: true,
    unique: true
});
module.exports = Category = new mongoose.model("Category",categoriesSchemas);

