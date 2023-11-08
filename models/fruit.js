const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
name: String,
color: String,
quantity: Number
})
module.exports = mongoose.model("Fruit",
fruitSchema)