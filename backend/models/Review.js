const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({

    name: String,
    description: String

})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review