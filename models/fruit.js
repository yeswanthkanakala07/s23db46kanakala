const { Double } = require("mongodb")
const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
        max: 5000
    }
});
module.exports = mongoose.model("fruit",fruitSchema)